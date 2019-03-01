CREATE DATABASE saunterer_db;
USE saunterer_db;

CREATE TABLE saunterer
(
        id INT NOT NULL AUTO_INCREMENT,
        client_name VARCHAR(120) NOT NULL,
        client_phone VARCHAR(20) NOT NULL,
        client_email VARCHAR(120) NOT NULL,
        PRIMARY KEY (id)
)