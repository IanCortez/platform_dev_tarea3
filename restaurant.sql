-- Users
CREATE USER 'utec'@'localhost' IDENTIFIED BY '1234567890';


-- Database
CREATE DATABASE restaurant;
USE restaurant;


-- Tables
CREATE TABLE menu (
	nombre_plato varchar(255) NOT NULL,
	precio float NOT NULL,
	created_date datetime,
	modified_date datetime,
	PRIMARY KEY (nombre_plato, precio)
);


-- Inserts
INSERT INTO menu
VALUES ("Ceviche", 25.50, NOW(), NOW());

INSERT INTO menu
VALUES ("Causa", 15.00, NOW(), NOW());

INSERT INTO menu
VALUES ("Jalea mixta", 28.00, NOW(), NOW());


-- ER_NOT_SUPPORTED_AUTH_MODE
ALTER USER 'youruser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'youpassword';
FLUSH PRIVILEGES;