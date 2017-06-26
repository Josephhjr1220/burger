
USE eua5rmkhzbnqef4s;

CREATE TABLE burgers
	(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN default false,
	date timestamp,
    PRIMARY KEY (id)
	);