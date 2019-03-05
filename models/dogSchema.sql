CREATE DATABASE dog_db;
USE dog_db;

CREATE TABLE dog
(
        id INT NOT NULL AUTO_INCREMENT,
        client_name VARCHAR(120) NOT NULL,
        client_phone VARCHAR(20) NOT NULL,
        client_email VARCHAR(120) NOT NULL,
        home_address VARCHAR(60) NOT NULL,
        dog_name VARCHAR(20) NOT NULL,
        dog_breed VARCHAR(20) NOT NULL,
        dog_age INTEGER(100) NOT NULL,
        vet_name VARCHAR(100) NOT NULL,
        vet_phone VARCHAR(50) NOT NULL,
        PRIMARY KEY (id)
)