DROP DATABASE IF EXISTS playerdbs;
CREATE DATABASE playerdbs;

USE playerdbs;

CREATE TABLE players (
  id INT NOT NULL AUTO_INCREMENT,
  playerName varchar(255) NOT NULL,
  score INT NOT NULL DEFAULT 0,
  round INT,
  wins INT NOT NULL DEFAULT 0,
  losses INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);
