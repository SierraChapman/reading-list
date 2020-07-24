-- for creating database

CREATE DATABASE reading_list_db;
USE reading_list_db;

CREATE TABLE books(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    was_read BOOLEAN DEFAULT FALSE
);