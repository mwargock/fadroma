<?php
// =====================================================================
// APLIKACJA FADROMY - API (PHP + MySQL)
//
// Publiczne (bez logowania):
//   GET  ?action=session            -> kto jest zalogowany + listy nazw do ekranów logowania
//   POST ?action=login_operator     -> {operatorId|name, pin} lub {qr: "Imię.Nazwisko#PIN"}
//   POST ?action=login_web          -> {name, password}
//   POST ?action=logout             -> {scope: "operator"|"web"|"all"}
// Wymagają zalogowania (operator lub użytkownik WEB):
//   GET  ?action=state              -> słowniki (bez PIN-ów i haseł) + rejestr pracy
//   POST ?action=save_log           -> dodanie / aktualizacja wpisu rejestru
// Wymagają zalogowania do panelu WEB:
//   POST ?action=save_dictionaries  -> zapis słowników
//   POST ?action=delete_log         -> {id}
//   POST ?action=set_operator_pin   -> {operatorId, pin}
//   POST ?action=set_web_password   -> {userId, password}
//   POST ?action=check_operator_pin -> {operatorId, pin} (do wydruku identyfikatora QR)
//
// PIN-y i hasła są przechowywane wyłącznie jako hash (password_hash) i nigdy
// nie są wysyłane do przeglądarki.
// =====================================================================

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('X-Content-Type-Options: nosniff');

const SCHEMA_VERSION      = 3;
const MAX_FAILS_ACCOUNT   = 5;    // nieudane próby na konto ...
const MAX_FAILS_IP        = 30;   // ... i na adres IP (wspólne Wi-Fi w zakładzie!)
const LOCK_WINDOW_MINUTES = 15;   // w oknie czasowym
const SESSION_LIFETIME    = 43200; // 12 h bezczynności

function respond(array $data, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRESERVE_ZERO_FRACTION);
    exit;
}

set_exception_handler(function (Throwable $e): void {
    error_log('[fadromy api] ' . $e->getMessage());
    respond(['error' => 'Błąd serwera / bazy danych'], 500);
});

function db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $c = require __DIR__ . '/config.php';
        $dsn = sprintf('mysql:host=%s;port=%s;dbname=%s;charset=%s',
            $c['db_host'], $c['db_port'], $c['db_name'], $c['db_charset']);
        $pdo = new PDO($dsn, $c['db_user'], $c['db_pass'], [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);
        $pdo->exec("SET time_zone = '+00:00'");
    }
    return $pdo;
}

// =====================================================================
// Migracja bazy (automatyczna): hashowanie PIN-ów i haseł,
// tabela prób logowania. Wykonuje się raz, przy pierwszym żądaniu.
// =====================================================================

function isHash(string $v): bool
{
    return $v !== '' && !empty(password_get_info($v)['algo']);
}

function ensureSchema(): void
{
    $pdo = db();
    $ver = $pdo->query("SELECT value FROM settings WHERE name = 'schema_version'")->fetchColumn();
    if ($ver !== false && (int)$ver >= SCHEMA_VERSION) {
        return;
    }
    if ((int)$pdo->query("SELECT GET_LOCK('fadromy_migrate', 30)")->fetchColumn() !== 1) {
        throw new RuntimeException('Nie udało się uzyskać blokady migracji');
    }
    try {
        $ver = $pdo->query("SELECT value FROM settings WHERE name = 'schema_version'")->fetchColumn();
        $ver = $ver === false ? 0 : (int)$ver;
        if ($ver >= SCHEMA_VERSION) {
            return;
        }
        if ($ver < 2) {
            migrateToV2($pdo);
        }
        if ($ver < 3) {
            $pdo->exec('CREATE TABLE IF NOT EXISTS auth_sessions (
                token_hash  CHAR(64)    NOT NULL,
                operator_id VARCHAR(64) NULL,
                web_user_id VARCHAR(64) NULL,
                created_at  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
                last_seen   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (token_hash),
                KEY idx_last_seen (last_seen)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');
        }
        $pdo->prepare("INSERT INTO settings (name, value) VALUES ('schema_version', ?)
                       ON DUPLICATE KEY UPDATE value = VALUES(value)")->execute([(string)SCHEMA_VERSION]);
    } finally {
        $pdo->query("SELECT RELEASE_LOCK('fadromy_migrate')");
    }
}

/** v2: PIN-y i hasła jako hash, tabela prób logowania. */
function migrateToV2(PDO $pdo): void
{
    $pdo->exec('ALTER TABLE operators MODIFY pin VARCHAR(255) NOT NULL DEFAULT \'\'');
    $pdo->exec('ALTER TABLE web_users MODIFY password VARCHAR(255) NOT NULL DEFAULT \'\'');
    $pdo->exec('CREATE TABLE IF NOT EXISTS login_attempts (
        id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        account_key VARCHAR(255)    NOT NULL,
        ip          VARCHAR(45)     NOT NULL,
        created_at  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY idx_account (account_key, created_at),
        KEY idx_ip (ip, created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci');

    foreach ([['operators', 'pin'], ['web_users', 'password']] as [$table, $col]) {
        $rows = $pdo->query("SELECT id, `$col` AS secret FROM `$table`")->fetchAll();
        $upd = $pdo->prepare("UPDATE `$table` SET `$col` = ? WHERE id = ?");
        foreach ($rows as $r) {
            $secret = (string)$r['secret'];
            if ($secret !== '' && !isHash($secret)) {
                $upd->execute([password_hash($secret, PASSWORD_DEFAULT), $r['id']]);
            }
        }
    }
}

// =====================================================================
// Sesja
// =====================================================================

// Sesja = losowy token wysyłany przez aplikację w nagłówku X-Fadromy-Token.
// W bazie zapisany jest tylko jego skrót SHA-256. Nie używamy ciasteczek,
// więc logowanie działa także, gdy aplikacja jest osadzona w ramce (iframe)
// na innej stronie, oraz na hostingu z nietrwałymi sesjami PHP.

$AUTH = ['token_hash' => null, 'operator_id' => null, 'web_user_id' => null];

function startSession(): void
{
    global $AUTH;
    $token = (string)($_SERVER['HTTP_X_FADROMY_TOKEN'] ?? '');
    if (!preg_match('/^[a-f0-9]{64}$/', $token)) {
        return;
    }
    $hash = hash('sha256', $token);
    $st = db()->prepare('SELECT operator_id, web_user_id, TIMESTAMPDIFF(SECOND, last_seen, UTC_TIMESTAMP()) AS idle
                         FROM auth_sessions WHERE token_hash = ?');
    $st->execute([$hash]);
    $row = $st->fetch();
    if (!$row) {
        return;
    }
    if ((int)$row['idle'] > SESSION_LIFETIME) {
        db()->prepare('DELETE FROM auth_sessions WHERE token_hash = ?')->execute([$hash]);
        return;
    }
    $AUTH = ['token_hash' => $hash, 'operator_id' => $row['operator_id'], 'web_user_id' => $row['web_user_id']];
    if ((int)$row['idle'] > 60) {
        db()->prepare('UPDATE auth_sessions SET last_seen = UTC_TIMESTAMP() WHERE token_hash = ?')->execute([$hash]);
    }
}

/** Zapisuje zalogowanie w bieżącej sesji (lub tworzy nową). Zwraca nowy token albo null. */
function authLogin(string $field, string $id): ?string
{
    global $AUTH;
    $pdo = db();
    if ($AUTH['token_hash']) {
        $pdo->prepare("UPDATE auth_sessions SET `$field` = ?, last_seen = UTC_TIMESTAMP() WHERE token_hash = ?")
            ->execute([$id, $AUTH['token_hash']]);
        $AUTH[$field] = $id;
        return null;
    }
    $token = bin2hex(random_bytes(32));
    $hash = hash('sha256', $token);
    $AUTH = ['token_hash' => $hash, 'operator_id' => null, 'web_user_id' => null];
    $AUTH[$field] = $id;
    $pdo->prepare('INSERT INTO auth_sessions (token_hash, operator_id, web_user_id, created_at, last_seen)
                   VALUES (?, ?, ?, UTC_TIMESTAMP(), UTC_TIMESTAMP())')
        ->execute([$hash, $AUTH['operator_id'], $AUTH['web_user_id']]);
    if (random_int(1, 20) === 1) {
        $pdo->exec('DELETE FROM auth_sessions WHERE last_seen < (UTC_TIMESTAMP() - INTERVAL ' . SESSION_LIFETIME . ' SECOND)');
    }
    return $token;
}

function authLogout(string $field): void
{
    global $AUTH;
    if (!$AUTH['token_hash']) {
        return;
    }
    $AUTH[$field] = null;
    if (!$AUTH['operator_id'] && !$AUTH['web_user_id']) {
        db()->prepare('DELETE FROM auth_sessions WHERE token_hash = ?')->execute([$AUTH['token_hash']]);
        $AUTH['token_hash'] = null;
    } else {
        db()->prepare("UPDATE auth_sessions SET `$field` = NULL WHERE token_hash = ?")->execute([$AUTH['token_hash']]);
    }
}

function publicOperator(array $r): array
{
    return ['id' => $r['id'], 'lp' => (int)$r['lp'], 'name' => $r['name']];
}

function publicWebUser(array $r): array
{
    return ['id' => $r['id'], 'lp' => (int)$r['lp'], 'name' => $r['name'], 'role' => $r['role']];
}

/** Zalogowany operator (sprawdzany w bazie - usunięty z listy = wylogowany). */
function currentOperator(): ?array
{
    static $cache = false;
    if ($cache !== false) {
        return $cache;
    }
    $cache = null;
    global $AUTH;
    if (!empty($AUTH['operator_id'])) {
        $st = db()->prepare('SELECT id, lp, name FROM operators WHERE id = ?');
        $st->execute([$AUTH['operator_id']]);
        $row = $st->fetch();
        if ($row) {
            $cache = publicOperator($row);
        } else {
            authLogout('operator_id');
        }
    }
    return $cache;
}

function currentWebUser(): ?array
{
    static $cache = false;
    if ($cache !== false) {
        return $cache;
    }
    $cache = null;
    global $AUTH;
    if (!empty($AUTH['web_user_id'])) {
        $st = db()->prepare('SELECT id, lp, name, role FROM web_users WHERE id = ?');
        $st->execute([$AUTH['web_user_id']]);
        $row = $st->fetch();
        if ($row) {
            $cache = publicWebUser($row);
        } else {
            authLogout('web_user_id');
        }
    }
    return $cache;
}

function me(): array
{
    return ['operator' => currentOperator(), 'webUser' => currentWebUser()];
}

function requireAnyLogin(): void
{
    if (!currentOperator() && !currentWebUser()) {
        respond(['error' => 'Sesja wygasła - zaloguj się ponownie', 'me' => me()], 401);
    }
}

function requireWebLogin(): array
{
    $u = currentWebUser();
    if (!$u) {
        $status = currentOperator() ? 403 : 401;
        respond(['error' => 'Wymagane zalogowanie do panelu WEB', 'me' => me()], $status);
    }
    return $u;
}

// =====================================================================
// Ograniczenie liczby prób logowania
// =====================================================================

function clientIp(): string
{
    return substr((string)($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0'), 0, 45);
}

function accountKey(string $type, string $value): string
{
    return $type . ':' . mb_strtolower(trim($value));
}

/** Zwraca liczbę minut blokady (0 = można próbować). */
function lockMinutesLeft(string $accountKey): int
{
    $pdo = db();
    $window = LOCK_WINDOW_MINUTES;
    $sql = "SELECT COUNT(*) AS n, MIN(created_at) AS first_at FROM login_attempts
            WHERE %s = ? AND created_at > (UTC_TIMESTAMP() - INTERVAL $window MINUTE)";
    foreach ([['account_key', $accountKey, MAX_FAILS_ACCOUNT], ['ip', clientIp(), MAX_FAILS_IP]] as [$col, $val, $max]) {
        $st = $pdo->prepare(sprintf($sql, $col));
        $st->execute([$val]);
        $row = $st->fetch();
        if ((int)$row['n'] >= $max) {
            $unlockAt = strtotime($row['first_at'] . ' UTC') + $window * 60;
            return max(1, (int)ceil(($unlockAt - time()) / 60));
        }
    }
    return 0;
}

function registerFailure(string $accountKey): void
{
    $pdo = db();
    $pdo->prepare('INSERT INTO login_attempts (account_key, ip, created_at) VALUES (?, ?, UTC_TIMESTAMP())')
        ->execute([$accountKey, clientIp()]);
    if (random_int(1, 20) === 1) {
        $pdo->exec('DELETE FROM login_attempts WHERE created_at < (UTC_TIMESTAMP() - INTERVAL 1 DAY)');
    }
}

function clearFailures(string $accountKey): void
{
    db()->prepare('DELETE FROM login_attempts WHERE account_key = ?')->execute([$accountKey]);
}

function lockedResponse(int $minutes): void
{
    respond(['error' => "Zbyt wiele nieudanych prób logowania. Spróbuj ponownie za $minutes min."], 429);
}

/** Sprawdza sekret; przy okazji przelicza stary hash, jeśli trzeba. */
function verifySecret(string $plain, ?string $hash, string $table, string $col, ?string $id): bool
{
    static $dummy = null;
    if ($hash === null || $hash === '' || !isHash($hash)) {
        // stały czas odpowiedzi także dla nieistniejącego konta
        $dummy = $dummy ?? password_hash('dummy-secret', PASSWORD_DEFAULT);
        password_verify($plain, $dummy);
        return false;
    }
    if (!password_verify($plain, $hash)) {
        return false;
    }
    if ($id !== null && password_needs_rehash($hash, PASSWORD_DEFAULT)) {
        db()->prepare("UPDATE `$table` SET `$col` = ? WHERE id = ?")
            ->execute([password_hash($plain, PASSWORD_DEFAULT), $id]);
    }
    return true;
}

function findOperatorByName(string $name): ?array
{
    $st = db()->prepare('SELECT * FROM operators WHERE LOWER(name) = LOWER(?) ORDER BY sort_order LIMIT 1');
    $st->execute([trim($name)]);
    return $st->fetch() ?: null;
}

// =====================================================================
// Konwersje dat (ISO 8601 <-> DATETIME w UTC) i pomocnicze
// =====================================================================

function isoToDb($iso): ?string
{
    if ($iso === null || $iso === '') {
        return null;
    }
    try {
        $dt = new DateTimeImmutable((string)$iso);
    } catch (Exception $e) {
        return null;
    }
    return $dt->setTimezone(new DateTimeZone('UTC'))->format('Y-m-d H:i:s.v');
}

function dbToIso(?string $val): ?string
{
    if ($val === null || $val === '') {
        return null;
    }
    $dt = new DateTimeImmutable($val, new DateTimeZone('UTC'));
    return $dt->format('Y-m-d\TH:i:s.v\Z');
}

function numOrNull($v): ?float
{
    return ($v === null || $v === '' || !is_numeric($v)) ? null : (float)$v;
}

function str($v, int $max = 190): string
{
    if ($v === null || is_array($v)) {
        return '';
    }
    return mb_substr((string)$v, 0, $max);
}

function validNewSecret($v, string $label, int $min): string
{
    $s = trim(is_string($v) ? $v : '');
    if (mb_strlen($s) < $min) {
        respond(['error' => "$label musi mieć co najmniej $min znaki"], 400);
    }
    if (mb_strlen($s) > 128) {
        respond(['error' => "$label jest za długie"], 400);
    }
    return $s;
}

// =====================================================================
// Słowniki
// =====================================================================
// klucz JSON => [tabela, [kolumna_db => [pole_js, typ]], [kolumna_sekretu, pole_js]|null]
const DICTIONARIES = [
    'operators' => ['operators', [
        'id' => ['id', 'str'], 'lp' => ['lp', 'int'], 'name' => ['name', 'str'],
    ], ['pin', 'pin']],
    'machines' => ['machines', [
        'id' => ['id', 'str'], 'name' => ['name', 'str'], 'qr_code' => ['qrCode', 'str'], 'model' => ['model', 'str'],
    ], null],
    'processes' => ['processes', [
        'id' => ['id', 'str'], 'lp' => ['lp', 'int'], 'name' => ['name', 'str'],
        'register_units' => ['registerUnits', 'bool'], 'unit' => ['unit', 'str'],
    ], null],
    'webUsers' => ['web_users', [
        'id' => ['id', 'str'], 'lp' => ['lp', 'int'], 'name' => ['name', 'str'], 'role' => ['role', 'str'],
    ], ['password', 'password']],
    'smsManagers' => ['sms_managers', [
        'id' => ['id', 'str'], 'name' => ['name', 'str'], 'phone' => ['phone', 'str'],
        'display_phone' => ['displayPhone', 'str'],
    ], null],
];

function castOut($v, string $type)
{
    switch ($type) {
        case 'int':  return (int)$v;
        case 'bool': return (bool)$v;
        default:     return (string)$v;
    }
}

function castIn($v, string $type)
{
    switch ($type) {
        case 'int':  return (int)$v;
        case 'bool': return $v ? 1 : 0;
        default:     return str($v);
    }
}

/** Słownik bez kolumn z sekretami. */
function loadDictionary(string $key): array
{
    [$table, $cols] = DICTIONARIES[$key];
    $rows = db()->query("SELECT * FROM `$table` ORDER BY sort_order, id")->fetchAll();
    $out = [];
    foreach ($rows as $r) {
        $item = [];
        foreach ($cols as $col => [$field, $type]) {
            $item[$field] = castOut($r[$col], $type);
        }
        $out[] = $item;
    }
    return $out;
}

/**
 * Zapis słownika: usuwa pozycje, których nie ma na liście, aktualizuje/dodaje pozostałe.
 * Sekret (PIN/hasło) zmienia się tylko, gdy przysłano nową wartość - jest wtedy hashowany.
 */
function saveDictionary(string $key, array $items): void
{
    [$table, $cols, $secret] = DICTIONARIES[$key];
    $pdo = db();

    $clean = [];
    foreach (array_values($items) as $item) {
        if (is_array($item) && !empty($item['id']) && !isset($clean[(string)$item['id']])) {
            $clean[(string)$item['id']] = $item;
        }
    }

    if ($clean) {
        $ph = implode(',', array_fill(0, count($clean), '?'));
        $pdo->prepare("DELETE FROM `$table` WHERE id NOT IN ($ph)")->execute(array_map('strval', array_keys($clean)));
    } else {
        $pdo->exec("DELETE FROM `$table`");
    }

    $colNames = array_keys($cols);
    $colNames[] = 'sort_order';
    $insertCols = $colNames;
    if ($secret) {
        $insertCols[] = $secret[0];
    }
    $updates = [];
    foreach ($colNames as $c) {
        if ($c !== 'id') {
            $updates[] = "`$c` = VALUES(`$c`)";
        }
    }
    $sqlBase = sprintf('INSERT INTO `%s` (`%s`) VALUES (%s) ON DUPLICATE KEY UPDATE %s',
        $table, implode('`, `', $insertCols), implode(', ', array_fill(0, count($insertCols), '?')),
        implode(', ', $updates));
    $stmtKeep = $pdo->prepare($sqlBase);
    $stmtNewSecret = $secret
        ? $pdo->prepare($sqlBase . ", `{$secret[0]}` = VALUES(`{$secret[0]}`)")
        : null;

    $i = 0;
    foreach ($clean as $item) {
        $values = [];
        foreach ($cols as [$field, $type]) {
            $values[] = castIn($item[$field] ?? null, $type);
        }
        $values[] = $i++;
        if ($secret) {
            $plain = trim(is_string($item[$secret[1]] ?? null) ? $item[$secret[1]] : '');
            if ($plain !== '') {
                $values[] = password_hash($plain, PASSWORD_DEFAULT);
                $stmtNewSecret->execute($values);
            } else {
                $values[] = ''; // nowa pozycja bez sekretu = nie można się zalogować
                $stmtKeep->execute($values);
            }
        } else {
            $stmtKeep->execute($values);
        }
    }
}

// =====================================================================
// Rejestr pracy
// =====================================================================

function logRowToJson(array $r): array
{
    $history = json_decode((string)($r['alert_history'] ?? ''), true);
    return [
        'id'              => $r['id'],
        'date'            => $r['date'],
        'shift'           => (int)$r['shift'],
        'operatorId'      => $r['operator_id'],
        'operatorName'    => $r['operator_name'],
        'machineId'       => $r['machine_id'],
        'machineName'     => $r['machine_name'],
        'machineQr'       => $r['machine_qr'],
        'processId'       => $r['process_id'],
        'processName'     => $r['process_name'],
        'startTime'       => dbToIso($r['start_time']),
        'endTime'         => dbToIso($r['end_time']),
        'durationSeconds' => (int)$r['duration_seconds'],
        'durationHours'   => (float)$r['duration_hours'],
        'unit'            => $r['unit'],
        'quantity'        => numOrNull($r['quantity']),
        'weightTons'      => numOrNull($r['weight_tons']),
        'weightKg'        => $r['weight_kg'] === null ? null : (int)$r['weight_kg'],
        'status'          => $r['status'],
        'alertActive'     => (bool)$r['alert_active'],
        'alertHistory'    => is_array($history) ? $history : [],
        'notes'           => (string)($r['notes'] ?? ''),
    ];
}

function saveLog(array $rec): void
{
    $id = str($rec['id'] ?? '', 64);
    if ($id === '') {
        respond(['error' => 'Brak identyfikatora wpisu'], 400);
    }

    // Operator bez sesji WEB może zapisywać tylko własne wpisy.
    if (!currentWebUser()) {
        $op = currentOperator();
        $st = db()->prepare('SELECT operator_id FROM work_logs WHERE id = ?');
        $st->execute([$id]);
        $existingOwner = $st->fetchColumn();
        if (($rec['operatorId'] ?? null) !== $op['id']
            || ($existingOwner !== false && $existingOwner !== $op['id'])) {
            respond(['error' => 'Brak uprawnień do tego wpisu'], 403);
        }
    }

    $date = (isset($rec['date']) && preg_match('/^\d{4}-\d{2}-\d{2}$/', (string)$rec['date'])) ? $rec['date'] : null;
    $weightKg = numOrNull($rec['weightKg'] ?? null);

    $sql = 'INSERT INTO work_logs
        (id, date, shift, operator_id, operator_name, machine_id, machine_name, machine_qr,
         process_id, process_name, start_time, end_time, duration_seconds, duration_hours,
         unit, quantity, weight_tons, weight_kg, status, alert_active, alert_history, notes)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        ON DUPLICATE KEY UPDATE
         date=VALUES(date), shift=VALUES(shift), operator_id=VALUES(operator_id),
         operator_name=VALUES(operator_name), machine_id=VALUES(machine_id),
         machine_name=VALUES(machine_name), machine_qr=VALUES(machine_qr),
         process_id=VALUES(process_id), process_name=VALUES(process_name),
         start_time=VALUES(start_time), end_time=VALUES(end_time),
         duration_seconds=VALUES(duration_seconds), duration_hours=VALUES(duration_hours),
         unit=VALUES(unit), quantity=VALUES(quantity), weight_tons=VALUES(weight_tons),
         weight_kg=VALUES(weight_kg), status=VALUES(status), alert_active=VALUES(alert_active),
         alert_history=VALUES(alert_history), notes=VALUES(notes)';

    db()->prepare($sql)->execute([
        $id,
        $date,
        (int)($rec['shift'] ?? 1),
        str($rec['operatorId'] ?? '', 64),
        str($rec['operatorName'] ?? ''),
        str($rec['machineId'] ?? '', 64),
        str($rec['machineName'] ?? ''),
        str($rec['machineQr'] ?? ''),
        str($rec['processId'] ?? '', 64),
        str($rec['processName'] ?? ''),
        isoToDb($rec['startTime'] ?? null),
        isoToDb($rec['endTime'] ?? null),
        (int)($rec['durationSeconds'] ?? 0),
        (float)($rec['durationHours'] ?? 0),
        str($rec['unit'] ?? '', 64),
        numOrNull($rec['quantity'] ?? null),
        numOrNull($rec['weightTons'] ?? null),
        $weightKg === null ? null : (int)round($weightKg),
        str($rec['status'] ?? '', 64),
        !empty($rec['alertActive']) ? 1 : 0,
        json_encode(is_array($rec['alertHistory'] ?? null) ? array_values($rec['alertHistory']) : [], JSON_UNESCAPED_UNICODE),
        str($rec['notes'] ?? '', 65000),
    ]);
}

// =====================================================================
// Router
// =====================================================================

function readJsonBody(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: 'null', true);
    if (!is_array($data)) {
        respond(['error' => 'Nieprawidłowe dane JSON'], 400);
    }
    return $data;
}

$action = (string)($_GET['action'] ?? '');
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$getActions = ['session', 'state'];

if (in_array($action, $getActions, true)) {
    if ($method !== 'GET') {
        respond(['error' => 'Wymagane żądanie GET'], 405);
    }
} else {
    if ($method !== 'POST') {
        respond(['error' => 'Wymagane żądanie POST'], 405);
    }
    // Ochrona CSRF: nagłówka nie da się dodać z obcej strony bez zgody CORS.
    if (($_SERVER['HTTP_X_FADROMY'] ?? '') !== '1') {
        respond(['error' => 'Nieprawidłowe żądanie'], 403);
    }
}

ensureSchema();
startSession();

switch ($action) {
    case 'session':
        $ops = array_map('publicOperator',
            db()->query('SELECT id, lp, name FROM operators ORDER BY sort_order, id')->fetchAll());
        $webs = array_map('publicWebUser',
            db()->query('SELECT id, lp, name, role FROM web_users ORDER BY sort_order, id')->fetchAll());
        respond(['me' => me(), 'loginOptions' => ['operators' => $ops, 'webUsers' => $webs]]);

    case 'login_operator':
        $data = readJsonBody();
        $row = null;
        $pin = '';
        if (isset($data['qr'])) {
            $parts = explode('#', trim((string)$data['qr']));
            if (count($parts) !== 2) {
                respond(['error' => 'Nieprawidłowy format QR operatora (oczekiwano Imię.Nazwisko#Hasło)'], 400);
            }
            $name = str_replace('.', ' ', $parts[0]);
            $pin = trim($parts[1]);
            $key = accountKey('op', $name);
            $row = findOperatorByName($name);
        } else {
            $pin = trim((string)($data['pin'] ?? ''));
            if (!empty($data['operatorId'])) {
                $st = db()->prepare('SELECT * FROM operators WHERE id = ?');
                $st->execute([(string)$data['operatorId']]);
                $row = $st->fetch() ?: null;
                $key = accountKey('op', $row['name'] ?? ('id:' . $data['operatorId']));
            } else {
                $name = (string)($data['name'] ?? '');
                $key = accountKey('op', $name);
                $row = findOperatorByName($name);
            }
        }
        if ($left = lockMinutesLeft($key)) {
            lockedResponse($left);
        }
        if ($pin === '' || !$row || !verifySecret($pin, $row['pin'], 'operators', 'pin', $row['id'])) {
            registerFailure($key);
            respond(['error' => 'Nieprawidłowy operator lub hasło (PIN)!'], 401);
        }
        clearFailures($key);
        $token = authLogin('operator_id', $row['id']);
        respond(['operator' => publicOperator($row)] + ($token ? ['token' => $token] : []));

    case 'login_web':
        $data = readJsonBody();
        $name = trim((string)($data['name'] ?? ''));
        $password = trim((string)($data['password'] ?? ''));
        $key = accountKey('web', $name);
        if ($left = lockMinutesLeft($key)) {
            lockedResponse($left);
        }
        $st = db()->prepare('SELECT * FROM web_users WHERE LOWER(name) = LOWER(?) ORDER BY sort_order LIMIT 1');
        $st->execute([$name]);
        $row = $st->fetch() ?: null;
        if ($password === '' || !$row || !verifySecret($password, $row['password'], 'web_users', 'password', $row['id'])) {
            registerFailure($key);
            respond(['error' => 'Błędny login lub hasło użytkownika WEB!'], 401);
        }
        clearFailures($key);
        $token = authLogin('web_user_id', $row['id']);
        respond(['webUser' => publicWebUser($row)] + ($token ? ['token' => $token] : []));

    case 'logout':
        $data = readJsonBody();
        $scope = (string)($data['scope'] ?? 'all');
        if ($scope === 'operator' || $scope === 'all') {
            authLogout('operator_id');
        }
        if ($scope === 'web' || $scope === 'all') {
            authLogout('web_user_id');
        }
        respond(['ok' => true]);

    case 'state':
        requireAnyLogin();
        $state = ['me' => me()];
        foreach (array_keys(DICTIONARIES) as $key) {
            $state[$key] = loadDictionary($key);
        }
        $webhook = db()->query("SELECT value FROM settings WHERE name = 'webhookUrl'")->fetchColumn();
        $state['webhookUrl'] = $webhook === false ? '' : (string)$webhook;
        $rows = db()->query('SELECT * FROM work_logs ORDER BY start_time DESC')->fetchAll();
        $state['logs'] = array_map('logRowToJson', $rows);
        respond($state);

    case 'save_log':
        requireAnyLogin();
        saveLog(readJsonBody());
        respond(['ok' => true]);

    case 'save_dictionaries':
        requireWebLogin();
        $data = readJsonBody();
        $pdo = db();
        $pdo->beginTransaction();
        try {
            foreach (array_keys(DICTIONARIES) as $key) {
                if (isset($data[$key]) && is_array($data[$key])) {
                    saveDictionary($key, $data[$key]);
                }
            }
            if (array_key_exists('webhookUrl', $data)) {
                $pdo->prepare('INSERT INTO settings (name, value) VALUES (\'webhookUrl\', ?)
                               ON DUPLICATE KEY UPDATE value = VALUES(value)')
                    ->execute([str($data['webhookUrl'], 2000)]);
            }
            $pdo->commit();
        } catch (Throwable $e) {
            $pdo->rollBack();
            throw $e;
        }
        respond(['ok' => true]);

    case 'delete_log':
        requireWebLogin();
        $data = readJsonBody();
        $id = str($data['id'] ?? '', 64);
        if ($id === '') {
            respond(['error' => 'Brak identyfikatora wpisu'], 400);
        }
        db()->prepare('DELETE FROM work_logs WHERE id = ?')->execute([$id]);
        respond(['ok' => true]);

    case 'set_operator_pin':
        requireWebLogin();
        $data = readJsonBody();
        $pin = validNewSecret($data['pin'] ?? '', 'PIN', 4);
        $st = db()->prepare('UPDATE operators SET pin = ? WHERE id = ?');
        $st->execute([password_hash($pin, PASSWORD_DEFAULT), (string)($data['operatorId'] ?? '')]);
        if ($st->rowCount() === 0) {
            respond(['error' => 'Nie znaleziono operatora'], 404);
        }
        $n = db()->prepare('SELECT name FROM operators WHERE id = ?');
        $n->execute([(string)$data['operatorId']]);
        clearFailures(accountKey('op', (string)$n->fetchColumn()));
        respond(['ok' => true]);

    case 'set_web_password':
        requireWebLogin();
        $data = readJsonBody();
        $password = validNewSecret($data['password'] ?? '', 'Hasło', 6);
        $st = db()->prepare('UPDATE web_users SET password = ? WHERE id = ?');
        $st->execute([password_hash($password, PASSWORD_DEFAULT), (string)($data['userId'] ?? '')]);
        if ($st->rowCount() === 0) {
            respond(['error' => 'Nie znaleziono użytkownika'], 404);
        }
        $n = db()->prepare('SELECT name FROM web_users WHERE id = ?');
        $n->execute([(string)$data['userId']]);
        clearFailures(accountKey('web', (string)$n->fetchColumn()));
        respond(['ok' => true]);

    case 'check_operator_pin':
        requireWebLogin();
        $data = readJsonBody();
        $st = db()->prepare('SELECT * FROM operators WHERE id = ?');
        $st->execute([(string)($data['operatorId'] ?? '')]);
        $row = $st->fetch() ?: null;
        $pin = trim((string)($data['pin'] ?? ''));
        $ok = $row && $pin !== '' && verifySecret($pin, $row['pin'], 'operators', 'pin', $row['id']);
        respond(['ok' => $ok]);

    default:
        respond(['error' => 'Nieznana akcja'], 400);
}
