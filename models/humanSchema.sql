USE dog_db;

CREATE TABLE human
(
        id INT NOT NULL AUTO_INCREMENT,
        human_name VARCHAR(120) NOT NULL,
        human_phone VARCHAR(20) NOT NULL,
        human_email VARCHAR(120) NOT NULL,
        human_zip VARCHAR(10) NOT NULL,
        PRIMARY KEY (id)
)