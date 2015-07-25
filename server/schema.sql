-- Drop database if it exists
DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId INT NOT NULL AUTO_INCREMENT,
  roomname varchar(20) NOT NULL,
  text varchar(255) NOT NULL,
  username INT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (objectId)
);

CREATE TABLE users (
  objectId INT NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  PRIMARY KEY (objectId),
  UNIQUE (username)
);

/*
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE friendships (
  id INT NOT NULL AUTO_INCREMENT,
  user1 INT NOT NULL,
  user2 INT NOT NULL,
  PRIMARY KEY (id)
);
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
