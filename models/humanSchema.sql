USE dog_db;
DROP TABLE IF EXISTS human;
CREATE TABLE human
(
        id INT NOT NULL AUTO_INCREMENT,
        human_name VARCHAR(120) NOT NULL,
        human_phone VARCHAR(20) NOT NULL,
        human_email VARCHAR(120) NOT NULL,
        human_address VARCHAR(100) NOT NULL,
        PRIMARY KEY (id)
)