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

## Uwaga dotycząca bezpieczeństwa
Logowanie (PIN operatora, hasło użytkownika WEB) jest – tak jak w oryginale – sprawdzane
w przeglądarce, a `api.php` udostępnia listę PIN-ów i haseł każdemu, kto zna adres.
Aplikację uruchamiaj w sieci firmowej lub zabezpiecz katalog dodatkowo
(np. hasłem `.htpasswd` lub dostępem tylko z określonych adresów IP).
