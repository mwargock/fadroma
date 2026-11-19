<?php
// =====================================================================
// Konfiguracja połączenia z bazą MySQL - UZUPEŁNIJ swoimi danymi.
// Można też ustawić zmienne środowiskowe FADROMY_DB_HOST itd.
// =====================================================================
return [
    'db_host'    => getenv('FADROMY_DB_HOST') ?: 'localhost',
    'db_port'    => getenv('FADROMY_DB_PORT') ?: '3306',
    'db_name'    => getenv('FADROMY_DB_NAME') ?: 'fadromy',
    'db_user'    => getenv('FADROMY_DB_USER') ?: 'fadromy',
    'db_pass'    => getenv('FADROMY_DB_PASS') !== false ? getenv('FADROMY_DB_PASS') : 'ZMIEN_HASLO',
    'db_charset' => 'utf8mb4',
];
