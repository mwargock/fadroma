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
  `pin`        VARCHAR(64)  NOT NULL,
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
  `password`   VARCHAR(190) NOT NULL,
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

-- ---------------------------------------------------------------------
-- Dane startowe (słowniki). INSERT IGNORE - ponowny import nie nadpisze zmian.
-- ---------------------------------------------------------------------
INSERT IGNORE INTO `operators` (`id`, `lp`, `name`, `pin`, `sort_order`) VALUES
  ('op_1', 1, 'Sebastian Kapłoniak', '9823', 0),
  ('op_2', 2, 'Karol Krawczyk', '9280', 1),
  ('op_3', 3, 'Adrian Sosnowicz', '8737', 2),
  ('op_4', 4, 'Zbigniew Kirscht', '8194', 3),
  ('op_5', 5, 'Stachowiak Mateusz', '7651', 4),
  ('op_6', 6, 'Michal Jagodziński', '7108', 5),
  ('op_7', 7, 'Mateusz Ciesielski', '6565', 6),
  ('op_8', 8, 'Vitalii Kholodniak', '6022', 7),
  ('op_9', 9, 'Mateusz Skrzypiec', '5479', 8),
  ('op_10', 10, 'Bohdan Klymkiv', '4936', 9),
  ('op_11', 11, 'Andrii Diakiv', '4393', 10),
  ('op_12', 12, 'Waldemar Stańczak', '3850', 11),
  ('op_13', 13, 'Wojciech Kowalski', '3307', 12),
  ('op_14', 14, 'Pawel Kozlowski', '2764', 13),
  ('op_15', 15, 'Andrzej Kowalski', '2221', 14),
  ('op_16', 16, 'Witold Gładki', '1678', 15),
  ('op_17', 17, 'Mariusz Wargocki', '1135', 16);

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
  ('wu_1', 1, 'Mateusz Ciesielski', 'ES6565', 'Admin / Kierownik', 0),
  ('wu_2', 2, 'Andrii Diakiv', 'ES4393', 'Kierownik Projektu', 1),
  ('wu_3', 3, 'Waldemar Stańczak', 'ES3850', 'Kierownik Projektu', 2),
  ('wu_4', 4, 'Wojciech Kowalski', 'ES3307', 'Nadzór', 3),
  ('wu_5', 5, 'Pawel Kozlowski', 'ES2764', 'Kierownik Projektu', 4),
  ('wu_6', 6, 'Andrzej Kowalski', 'ES2221', 'Nadzór', 5),
  ('wu_7', 7, 'Witold Gładki', 'ES1678', 'Nadzór', 6),
  ('wu_8', 8, 'Mariusz Wargocki', 'ES1135', 'Nadzór', 7);

INSERT IGNORE INTO `sms_managers` (`id`, `name`, `phone`, `display_phone`, `sort_order`) VALUES
  ('sms_1', 'Mateusz Ciesielski', '+48577763345', '+48 577 763 345', 0),
  ('sms_2', 'Andrii Diakiv', '+48500505143', '+48 500 505 143', 1),
  ('sms_3', 'Waldemar Stańczak', '+48512544142', '+48 512 544 142', 2),
  ('sms_4', 'Paweł Kozłowski', '+48604116576', '+48 604 116 576', 3);

INSERT IGNORE INTO `settings` (`name`, `value`) VALUES ('webhookUrl', '');
