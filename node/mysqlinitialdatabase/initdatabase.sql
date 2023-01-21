CREATE DATABASE IF NOT EXISTS nodedb;
CREATE TABLE IF NOT EXISTS `nodedb`.`people` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL  
);
INSERT INTO `nodedb`.`people` (`name`)
    VALUES
        ("Pessoa 1"),
        ("Pessoa 2"),
        ("Pessoa 3");