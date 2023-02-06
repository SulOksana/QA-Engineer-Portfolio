USE DB2;
CREATE TABLE person2(
person_ID int not null auto_increment PRIMARY KEY,
FirstName varchar(45) not null,
LastName varchar(45) not null
);
INSERT INTO DB2.BREEDS (id, nameOfBreed) VALUES
(1,"Beagle"),
(2,"Pug"),
(3,"French Bulldog");
SELECT * FROM DB2.BREEDS;
INSERT INTO DB2.BREEDS (nameOfBreed) VALUES
("Puddle"),
("Labrador"),
("Doberman");
UPDATE DB2.BREEDS SET nameOfBreed = "Bulldog" WHERE nameOfBreed = "French Bulldog";
ALTER TABLE DB2.BREEDS 
ADD `age` INT NOT NULL;
ALTER TABLE DB2.BREEDS 
DROP COLUMN `age`;
DELETE FROM DB2.BREEDS WHERE id=4;
DROP TABLE DB2.person2;
TRUNCATE DB2.BREEDS;


