CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('cheeseburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('double cheeseburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('double cheeseburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('cheeseburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('pineapple burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('pineapple burger', FALSE);