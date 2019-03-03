CREATE DATABASE dog_db;
USE dog_db;

CREATE TABLE dog
(
        id INT NOT NULL AUTO_INCREMENT,
        client_firstName VARCHAR(120) NOT NULL,
        client_lastName VARCHAR(120) NOT NULL,
        client_phone VARCHAR(20) NOT NULL,
        client_email VARCHAR(120) NOT NULL,
        home_address VARCHAR(60) NOT NULL,
        dog_name VARCHAR(20) NOT NULL,
        dog_weight VARCHAR(50) NOT NULL,
        dog_breed VARCHAR(20) NOT NULL,
        dog_age VARCHAR(20) NOT NULL,
        vet_name VARCHAR(120) NOT NULL,
        vet_phoneNumber VARCHAR(60) NOT NULL,
        createdAt BOOLEAN FALSE,
        updatedAt BOOLEAN FALSE
        PRIMARY KEY (id)
)