# APLIKACJA FADROMY – wersja PHP + MySQL

System Ewidencji Ładowarek przerobiony tak, aby wszystkie dane (operatorzy, maszyny,
zakresy prac, użytkownicy WEB, kierownicy SMS, ustawienia oraz rejestr pracy)
były zapisywane w bazie **MySQL / MariaDB** na serwerze, a nie w pamięci przeglądarki
ani w Firebase. Wszystkie urządzenia (telefony operatorów i panel WEB) widzą te same
dane – odświeżanie co 5 sekund.

## Wymagania
- PHP 7.4+ (zalecane 8.x) z rozszerzeniami `pdo_mysql` i `mbstring`
- MySQL 5.7+ lub MariaDB 10.3+
- Dowolny serwer WWW (Apache, nginx, hosting współdzielony)

## Instalacja
1. Skopiuj zawartość katalogu `fadroma-php/` na serwer (np. `public_html/fadromy/`).
2. Utwórz bazę danych i użytkownika (np. w panelu hostingu albo):
   ```sql
   CREATE DATABASE fadromy CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'fadromy'@'localhost' IDENTIFIED BY 'TwojeHaslo';
   GRANT ALL PRIVILEGES ON fadromy.* TO 'fadromy'@'localhost';
   ```
3. Zaimportuj `schema.sql` (phpMyAdmin → Import, albo `mysql -u fadromy -p fadromy < schema.sql`).
   Tworzy tabele i wstawia startowe słowniki (operatorzy, maszyny, procesy, użytkownicy WEB, SMS).
4. Uzupełnij dane dostępowe w `config.php`.
5. Otwórz `https://twoja-domena/fadromy/` w przeglądarce.

> Skaner kodów QR (kamera telefonu) działa tylko przez **HTTPS** (lub na `localhost`).

## Struktura
| Plik | Opis |
|------|------|
| `index.php` | strona aplikacji (React) |
| `api.php` | API JSON: `state`, `save_dictionaries`, `save_log`, `delete_log` |
| `config.php` | dane połączenia z bazą |
| `schema.sql` | tabele + dane startowe |
| `assets/app.js` | kod aplikacji (bez Firebase, komunikacja z `api.php`) |
| `assets/vendor/` | React, ReactDOM i Tailwind (lokalnie, bez CDN) |

## Tabele
`operators`, `machines`, `processes`, `web_users`, `sms_managers`, `settings` (webhook SMS),
`work_logs` (rejestr: START/STOP, czas, ilości, tony/kg, status, alerty, uwagi).
Czas `start_time` / `end_time` zapisywany jest w UTC.

## Bezpieczeństwo logowania
- **Logowanie sprawdza serwer.** Po poprawnym PIN-ie / haśle `api.php` wydaje losowy token sesji,
  który aplikacja wysyła w nagłówku `X-Fadromy-Token` (w bazie, w tabeli `auth_sessions`, jest tylko
  jego skrót SHA-256). Sesja wygasa po 12 h bezczynności. Nie są używane ciasteczka ani sesje PHP,
  więc logowanie działa także w ramce (iframe) osadzonej na innej stronie, np. w Google Sites.
  Bez zalogowania API nie zwraca żadnych danych poza listą nazwisk do ekranu logowania.
- **PIN-y i hasła są w bazie tylko jako hash** (`password_hash`) i nigdy nie trafiają do przeglądarki.
  Przy aktualizacji z poprzedniej wersji `api.php` sam zamienia stare wartości na hashe
  przy pierwszym uruchomieniu (wpis `schema_version` w tabeli `settings`).
- **Limit prób:** 5 nieudanych logowań na konto lub 30 z jednego adresu IP w ciągu 15 minut
  blokuje kolejne próby na 15 minut. Ustawienie nowego PIN-u / hasła w panelu zdejmuje blokadę konta.
  Ręczne odblokowanie wszystkich: `DELETE FROM login_attempts;`
- **Uprawnienia:** operator może zapisywać tylko własne wpisy w rejestrze; słowniki, usuwanie
  wpisów i zmiana PIN-ów/haseł wymagają zalogowania do panelu WEB.
- PIN-u ani hasła nie da się odczytać – w panelu *Słowniki i Baza* można je tylko ustawić na nowe
  („Zmień PIN” / „Zmień hasło”). Aby wydrukować identyfikator QR operatora, w zakładce
  *Kody QR do druku* kliknij kartę operatora i podaj jego PIN. Kody QR są generowane lokalnie.
- Startowe PIN-y i hasła są takie same jak w poprzedniej wersji – **zmień je** po instalacji.
- Używaj **HTTPS** – bez niego PIN-y i hasła idą przez sieć otwartym tekstem.
