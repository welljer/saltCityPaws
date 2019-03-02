CREATE DATABASE client_db;
USE client_db;

CREATE TABLE client
(
        id INT NOT NULL AUTO_INCREMENT,
        client_name VARCHAR(120) NOT NULL,
        client_phone VARCHAR(20) NOT NULL,
        client_email VARCHAR(120) NOT NULL,
        home_address VARCHAR(60) NOT NULL,
        dog_name VARCHAR(20) NOT NULL,
        dog_breed VARCHAR(20) NOT NULL,
        dog_age VARCHAR(20) NOT NULL,
        PRIMARY KEY (id)
)