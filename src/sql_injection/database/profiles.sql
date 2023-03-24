CREATE DATABASE profiles;
USE profiles; 
CREATE TABLE users(
    user_id int NOT NULL AUTO_INCREMENT, 
    username varchar (255) NOT NULL,
    password varchar (255) NOT NULL,
    PRIMARY KEY (user_id)
);

INSERT INTO users (username, password) 
VALUES
    ("admin", "fjkafnj"),
    ("Florian", "hjihvbuw"),
    ("Beniamin", "blümchen");
