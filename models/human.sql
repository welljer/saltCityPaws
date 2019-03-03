USE dog_db;

CREATE TABLE human
(
        id INT NOT NULL AUTO_INCREMENT,
        human_name VARCHAR(120) NOT NULL,
        human_phone VARCHAR(20) NOT NULL,
        human_email VARCHAR(120) NOT NULL,
        createdAt BOOLEAN FALSE,
        updatedAt BOOLEAN FALSE
        PRIMARY KEY (id)
)