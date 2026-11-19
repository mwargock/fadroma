<?php
// =====================================================================
// APLIKACJA FADROMY - API (PHP + MySQL)
//
//   GET  api.php?action=state               -> słowniki + rejestr pracy
//   POST api.php?action=save_dictionaries   -> zapis słowników (JSON)
//   POST api.php?action=save_log            -> dodanie / aktualizacja wpisu
//   POST api.php?action=delete_log          -> usunięcie wpisu {id}
// =====================================================================

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate');

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

// ---------- Konwersje dat (ISO 8601 <-> DATETIME w UTC) ----------

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

// ---------- Mapowanie słowników ----------
// klucz JSON w aplikacji => [tabela, [kolumna_db => [pole_js, typ]]]
const DICTIONARIES = [
    'operators' => ['operators', [
        'id' => ['id', 'str'], 'lp' => ['lp', 'int'], 'name' => ['name', 'str'], 'pin' => ['pin', 'str'],
    ]],
    'machines' => ['machines', [
        'id' => ['id', 'str'], 'name' => ['name', 'str'], 'qr_code' => ['qrCode', 'str'], 'model' => ['model', 'str'],
    ]],
    'processes' => ['processes', [
        'id' => ['id', 'str'], 'lp' => ['lp', 'int'], 'name' => ['name', 'str'],
        'register_units' => ['registerUnits', 'bool'], 'unit' => ['unit', 'str'],
    ]],
    'webUsers' => ['web_users', [
        'id' => ['id', 'str'], 'lp' => ['lp', 'int'], 'name' => ['name', 'str'],
        'password' => ['password', 'str'], 'role' => ['role', 'str'],
    ]],
    'smsManagers' => ['sms_managers', [
        'id' => ['id', 'str'], 'name' => ['name', 'str'], 'phone' => ['phone', 'str'],
        'display_phone' => ['displayPhone', 'str'],
    ]],
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

function saveDictionary(string $key, array $items): void
{
    [$table, $cols] = DICTIONARIES[$key];
    $pdo = db();
    $pdo->exec("DELETE FROM `$table`");
    $colNames = array_keys($cols);
    $colNames[] = 'sort_order';
    $sql = sprintf('INSERT INTO `%s` (`%s`) VALUES (%s)',
        $table, implode('`, `', $colNames), implode(', ', array_fill(0, count($colNames), '?')));
    $stmt = $pdo->prepare($sql);
    $seen = [];
    foreach (array_values($items) as $i => $item) {
        if (!is_array($item) || empty($item['id']) || isset($seen[(string)$item['id']])) {
            continue;
        }
        $seen[(string)$item['id']] = true;
        $values = [];
        foreach ($cols as [$field, $type]) {
            $values[] = castIn($item[$field] ?? null, $type);
        }
        $values[] = $i;
        $stmt->execute($values);
    }
}

// ---------- Rejestr pracy ----------

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

// ---------- Router ----------

function readJsonBody(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: 'null', true);
    if (!is_array($data)) {
        respond(['error' => 'Nieprawidłowe dane JSON'], 400);
    }
    return $data;
}

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method !== 'GET' && $method !== 'POST') {
    respond(['error' => 'Metoda niedozwolona'], 405);
}
if ($action !== 'state' && $method !== 'POST') {
    respond(['error' => 'Wymagane żądanie POST'], 405);
}

switch ($action) {
    case 'state':
        $state = [];
        foreach (array_keys(DICTIONARIES) as $key) {
            $state[$key] = loadDictionary($key);
        }
        $webhook = db()->query("SELECT value FROM settings WHERE name = 'webhookUrl'")->fetchColumn();
        $state['webhookUrl'] = $webhook === false ? '' : (string)$webhook;
        $rows = db()->query('SELECT * FROM work_logs ORDER BY start_time DESC')->fetchAll();
        $state['logs'] = array_map('logRowToJson', $rows);
        respond($state);

    case 'save_dictionaries':
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

    case 'save_log':
        saveLog(readJsonBody());
        respond(['ok' => true]);

    case 'delete_log':
        $data = readJsonBody();
        $id = str($data['id'] ?? '', 64);
        if ($id === '') {
            respond(['error' => 'Brak identyfikatora wpisu'], 400);
        }
        db()->prepare('DELETE FROM work_logs WHERE id = ?')->execute([$id]);
        respond(['ok' => true]);

    default:
        respond(['error' => 'Nieznana akcja'], 400);
}
