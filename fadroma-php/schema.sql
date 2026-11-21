-- =====================================================================
-- APLIKACJA FADROMY - System Ewidencji Ładowarek
-- Schemat bazy danych MySQL / MariaDB + dane startowe
--
-- Import:  mysql -u UZYTKOWNIK -p NAZWA_BAZY < schema.sql
-- (lub w phpMyAdmin: zakładka "Import")
-- =====================================================================

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS `operators` (
  `id`         VARCHAR(64)  NOT NULL,
  `lp`         INT          NOT NULL DEFAULT 0,
  `name`       VARCHAR(190) NOT NULL,
  `pin`        VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'hash password_hash()',
  `sort_order` INT          NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `machines` (
  `id`         VARCHAR(64)  NOT NULL,
  `name`       VARCHAR(190) NOT NULL,
  `qr_code`    VARCHAR(190) NOT NULL DEFAULT '',
  `model`      VARCHAR(190) NOT NULL DEFAULT '',
  `sort_order` INT          NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `processes` (
  `id`             VARCHAR(64)  NOT NULL,
  `lp`             INT          NOT NULL DEFAULT 0,
  `name`           VARCHAR(190) NOT NULL,
  `register_units` TINYINT(1)   NOT NULL DEFAULT 0,
  `unit`           VARCHAR(64)  NOT NULL DEFAULT '',
  `sort_order`     INT          NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `web_users` (
  `id`         VARCHAR(64)  NOT NULL,
  `lp`         INT          NOT NULL DEFAULT 0,
  `name`       VARCHAR(190) NOT NULL,
  `password`   VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'hash password_hash()',
  `role`       VARCHAR(190) NOT NULL DEFAULT '',
  `sort_order` INT          NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `sms_managers` (
  `id`            VARCHAR(64)  NOT NULL,
  `name`          VARCHAR(190) NOT NULL,
  `phone`         VARCHAR(64)  NOT NULL DEFAULT '',
  `display_phone` VARCHAR(64)  NOT NULL DEFAULT '',
  `sort_order`    INT          NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `settings` (
  `name`  VARCHAR(64) NOT NULL,
  `value` TEXT        NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Rejestr pracy (START/STOP, ilości, alerty)
CREATE TABLE IF NOT EXISTS `work_logs` (
  `id`               VARCHAR(64)    NOT NULL,
  `date`             DATE           NULL,
  `shift`            TINYINT        NOT NULL DEFAULT 1,
  `operator_id`      VARCHAR(64)    NOT NULL DEFAULT '',
  `operator_name`    VARCHAR(190)   NOT NULL DEFAULT '',
  `machine_id`       VARCHAR(64)    NOT NULL DEFAULT '',
  `machine_name`     VARCHAR(190)   NOT NULL DEFAULT '',
  `machine_qr`       VARCHAR(190)   NOT NULL DEFAULT '',
  `process_id`       VARCHAR(64)    NOT NULL DEFAULT '',
  `process_name`     VARCHAR(190)   NOT NULL DEFAULT '',
  `start_time`       DATETIME(3)    NULL COMMENT 'UTC',
  `end_time`         DATETIME(3)    NULL COMMENT 'UTC',
  `duration_seconds` INT            NOT NULL DEFAULT 0,
  `duration_hours`   DECIMAL(10,3)  NOT NULL DEFAULT 0,
  `unit`             VARCHAR(64)    NOT NULL DEFAULT '',
  `quantity`         DECIMAL(14,3)  NULL,
  `weight_tons`      DECIMAL(14,3)  NULL,
  `weight_kg`        INT            NULL,
  `status`           VARCHAR(64)    NOT NULL DEFAULT '',
  `alert_active`     TINYINT(1)     NOT NULL DEFAULT 0,
  `alert_history`    TEXT           NULL COMMENT 'JSON',
  `notes`            TEXT           NULL,
  `created_at`       TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`       TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_date_shift` (`date`, `shift`),
  KEY `idx_operator_status` (`operator_id`, `status`),
  KEY `idx_start_time` (`start_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Nieudane próby logowania (ochrona przed zgadywaniem PIN-ów i haseł)
CREATE TABLE IF NOT EXISTS `login_attempts` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `account_key` VARCHAR(255)    NOT NULL,
  `ip`          VARCHAR(45)     NOT NULL,
  `created_at`  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_account` (`account_key`, `created_at`),
  KEY `idx_ip` (`ip`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sesje logowania (token w nagłówku X-Fadromy-Token, w bazie tylko skrót SHA-256)
CREATE TABLE IF NOT EXISTS `auth_sessions` (
  `token_hash`  CHAR(64)    NOT NULL,
  `operator_id` VARCHAR(64) NULL,
  `web_user_id` VARCHAR(64) NULL,
  `created_at`  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_seen`   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`token_hash`),
  KEY `idx_last_seen` (`last_seen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Historia wysłanych SMS-ów (SMSAPI)
CREATE TABLE IF NOT EXISTS `sms_log` (
  `id`          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at`  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `kind`        VARCHAR(16)     NOT NULL DEFAULT 'alert',
  `operator_id` VARCHAR(64)     NULL,
  `web_user_id` VARCHAR(64)     NULL,
  `recipients`  TEXT            NULL,
  `message`     TEXT            NULL,
  `ok`          TINYINT(1)      NOT NULL DEFAULT 0,
  `sent_count`  INT             NOT NULL DEFAULT 0,
  `response`    TEXT            NULL,
  PRIMARY KEY (`id`),
  KEY `idx_kind_created` (`kind`, `created_at`),
  KEY `idx_operator` (`operator_id`, `created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Dane startowe (słowniki). INSERT IGNORE - ponowny import nie nadpisze zmian.
-- PIN-y i hasła zapisane jako hash - wartości startowe są takie same jak w
-- poprzedniej wersji aplikacji; zmień je w panelu WEB (Słowniki i Baza).
-- ---------------------------------------------------------------------
INSERT IGNORE INTO `operators` (`id`, `lp`, `name`, `pin`, `sort_order`) VALUES
  ('op_1', 1, 'Sebastian Kapłoniak', '$2y$10$hqLWCUyLwKAtEDj0YOEZV.yy6Jel9pMCGbK9uB1SoNckmakq2NtnG', 0),
  ('op_2', 2, 'Karol Krawczyk', '$2y$10$vRKcb8h2v3cxZo7QBGDmNeY32.3OcB4emon9VOIXZexRdubBIyL3a', 1),
  ('op_3', 3, 'Adrian Sosnowicz', '$2y$10$E66vUea6LFrpcckYQaacWelBCvm1dEzmddVJKSi/odw3w8o7cYJv6', 2),
  ('op_4', 4, 'Zbigniew Kirscht', '$2y$10$oeZeyGPSt.yHpsixBcb/i.SPH2RF3LHkGDTxnDmeSXe1g3XDSCY16', 3),
  ('op_5', 5, 'Stachowiak Mateusz', '$2y$10$y2BKxo2x7w8uO0rzt2vZWO7e9l3Nl5ln5zlGl4NsDktai251VXl.m', 4),
  ('op_6', 6, 'Michal Jagodziński', '$2y$10$5IQJj9Z63vgAS6grTNdn8Ou.opFWgpxOf2zHwb81S/lKfOfpl2qDW', 5),
  ('op_7', 7, 'Mateusz Ciesielski', '$2y$10$VuviOoo1zsUJIQpPZZB.9uINHKQ2leWC0L1dz56aZUIPouU26Ze8y', 6),
  ('op_8', 8, 'Vitalii Kholodniak', '$2y$10$n044ZfJs.TLMcwev7m6Ncue6al.wb5Z33pouMSqUCWtaZBhxV2ZRm', 7),
  ('op_9', 9, 'Mateusz Skrzypiec', '$2y$10$e3Y9n4Wzgdy73y4QPGBDrevQ/2uAnzF05KCr8rf8j3q/pOu2V.QDi', 8),
  ('op_10', 10, 'Bohdan Klymkiv', '$2y$10$fRRtVegPXwwQOk4G6zZpkeAOHeWB6o88gabshqVE3h7jeXaV7EXxO', 9),
  ('op_11', 11, 'Andrii Diakiv', '$2y$10$5bXqe64KH6jbNS/KAPdGROzuSiW6PoH558mB.20vsyjqGJwVpoRAW', 10),
  ('op_12', 12, 'Waldemar Stańczak', '$2y$10$XgtP4JzEQB8RnMbWwJvBy.x7BlS50PS6I3wwyFrC4yYNI0kqKsGVC', 11),
  ('op_13', 13, 'Wojciech Kowalski', '$2y$10$Cdu4JYvEAY3E4OtxZ0X6/efhbRO7rOdY.Dt/bNymhAWehhYUvF2Im', 12),
  ('op_14', 14, 'Pawel Kozlowski', '$2y$10$wJz01K/0qpTd8CjFfCUPkOpVZ/5NUExupYfEinbiht46js2kdfgSi', 13),
  ('op_15', 15, 'Andrzej Kowalski', '$2y$10$cYlWZOkRkb6rbbgRNKMz0.oGEvXXIco0vMwpEZlozk8PQjmcZLhia', 14),
  ('op_16', 16, 'Witold Gładki', '$2y$10$8/i5Anno/ESFDFA4o7YAwObFfYzyJVQ8vIE0CUT1.3WABTxO3eY1G', 15),
  ('op_17', 17, 'Mariusz Wargocki', '$2y$10$DichQ6QbDOjje.wI9pe6p.wB3nVLGXzU4eZr28qQ.9.t1qBvAQnZO', 16);

INSERT IGNORE INTO `machines` (`id`, `name`, `qr_code`, `model`, `sort_order`) VALUES
  ('m_1', 'Ładowarka TELESKOPOWA', 'Liebherr_T32', 'Liebherr T32', 0),
  ('m_2', 'LADOWARKA DUŻA NR 1', 'XC958_1', 'XCMG XC958 #1', 1),
  ('m_3', 'LADOWARKA DUŻA NR 2', 'XC958_2', 'XCMG XC958 #2', 2),
  ('m_4', 'LADOWARKA DUŻA NR 3', 'L550_Xpower', 'Liebherr L550 XPower', 3);

INSERT IGNORE INTO `processes` (`id`, `lp`, `name`, `register_units`, `unit`, `sort_order`) VALUES
  ('p_1', 1, 'Załadunek aut', 1, 'tony', 0),
  ('p_2', 2, 'Załadunek żelaza', 0, '', 1),
  ('p_3', 3, 'Zasyp młynka Hansek', 0, '', 2),
  ('p_4', 4, 'Zasyp młynka SM', 0, '', 3),
  ('p_5', 5, 'Łamanie / załadunek drewna', 1, 'palety', 4),
  ('p_6', 6, 'Ubijanie kontenerów', 0, '', 5),
  ('p_7', 7, 'Rozjeżdżanie', 0, '', 6),
  ('p_8', 8, 'Podgarnianie z kontenerów', 0, '', 7),
  ('p_9', 9, 'Recykling pieca L5', 1, 'tony', 8),
  ('p_10', 10, 'Recykling pieca L6', 0, '', 9),
  ('p_11', 11, 'Załadunek pyłów', 1, 'big-bag', 10),
  ('p_12', 12, 'Cyklonik L3', 0, '', 11),
  ('p_13', 13, 'Cyklonik L4', 1, 'tony', 12),
  ('p_14', 14, 'Wywożenie ze stacji filtracyjnej', 0, '', 13),
  ('p_15', 15, 'Wywożenie spod pieców', 0, '', 14),
  ('p_16', 16, 'Podgarnianie boksu L5', 0, '', 15),
  ('p_17', 17, 'Obsługa przesiewacza', 0, '', 16),
  ('p_18', 18, 'Wywóz spod redlerów', 0, '', 17),
  ('p_19', 19, 'Przewóz żelaza', 0, '', 18),
  ('p_20', 20, 'Zasyp kamienia', 1, 'tony', 19),
  ('p_21', 21, 'Przewóz kamienia / podgarnianie', 0, '', 20),
  ('p_22', 22, 'Przerwa śniadaniowa', 0, '', 21),
  ('p_23', 23, 'Prace inne (opis w uwagach)', 0, '', 22),
  ('p_24', 24, 'INNE', 1, 'sztuki', 23);

INSERT IGNORE INTO `web_users` (`id`, `lp`, `name`, `password`, `role`, `sort_order`) VALUES
  ('wu_1', 1, 'Mateusz Ciesielski', '$2y$10$UtBXwOIhDwZwrdUoUVYAoef.oAG6VeaHuMeLWgoqwVakzNXN/xrfC', 'Admin / Kierownik', 0),
  ('wu_2', 2, 'Andrii Diakiv', '$2y$10$zcDC7EkZnhJ0Hh0IesTEtuyJw2d0TSB.LCs1lc5TfiAliR088fRbS', 'Kierownik Projektu', 1),
  ('wu_3', 3, 'Waldemar Stańczak', '$2y$10$S1pMy4H2wpATe8wNYMNUUOiJBpfDY7dv6QrKK3beEbhnsGctl/w9K', 'Kierownik Projektu', 2),
  ('wu_4', 4, 'Wojciech Kowalski', '$2y$10$aWrE1l.BVA2tkDGOz6Iz6ue5YnrFlpQwwGyvnOMMdh/wgzG3p29F6', 'Nadzór', 3),
  ('wu_5', 5, 'Pawel Kozlowski', '$2y$10$BYjix1v3YgqgxzJsNvoBy.JgCnV8j6DQi7rOempWDGXLbCIKFHNT.', 'Kierownik Projektu', 4),
  ('wu_6', 6, 'Andrzej Kowalski', '$2y$10$onm4r1IRaUwdQC7885egK.evzpSESGaRQS4mEWD40PLcivMolzi8i', 'Nadzór', 5),
  ('wu_7', 7, 'Witold Gładki', '$2y$10$rNcqm.P7VIcpJNItLGYBce1poboYs.sR5lgWtnIfD0SeFnm.XMAU6', 'Nadzór', 6),
  ('wu_8', 8, 'Mariusz Wargocki', '$2y$10$LDv8O83MkuqVbFaXYZR6nuon40CAKjyhSi/O0Fm9vZ2pE/UJtgq0.', 'Nadzór', 7);

INSERT IGNORE INTO `sms_managers` (`id`, `name`, `phone`, `display_phone`, `sort_order`) VALUES
  ('sms_1', 'Mateusz Ciesielski', '+48577763345', '+48 577 763 345', 0),
  ('sms_2', 'Andrii Diakiv', '+48500505143', '+48 500 505 143', 1),
  ('sms_3', 'Waldemar Stańczak', '+48512544142', '+48 512 544 142', 2),
  ('sms_4', 'Paweł Kozłowski', '+48604116576', '+48 604 116 576', 3);

INSERT IGNORE INTO `settings` (`name`, `value`) VALUES ('webhookUrl', ''), ('schema_version', '4');
