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

    // ---- SMSAPI.pl - automatyczne SMS-y przy ALERCIE POMOCY ----
    // Token OAuth z panelu SMSAPI (Ustawienia API -> Tokeny API, uprawnienie "SMS").
    // Wpisz go TYLKO w pliku na serwerze - nie zapisuj go w repozytorium.
    'smsapi_token'     => getenv('FADROMY_SMSAPI_TOKEN') ?: '',
    // Nazwa nadawcy zatwierdzona w panelu SMSAPI (np. 'Fadromy'); puste = domyślny nadawca konta.
    'smsapi_from'      => '',
    // true = zamiana polskich znaków na łacińskie (1 SMS = 160 znaków zamiast 70 - taniej).
    'smsapi_normalize' => true,
    // true = tryb testowy SMSAPI: wysyłka jest sprawdzana, ale SMS nie wychodzi i nic nie kosztuje.
    'smsapi_test'      => false,
    'smsapi_url'       => getenv('FADROMY_SMSAPI_URL') ?: 'https://api.smsapi.pl/sms.do',
];
