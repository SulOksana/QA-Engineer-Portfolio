Use bank;
SELECT * FROM Client;
SELECT COUNT(Age),Age FROM Client GROUP BY Age;
SELECT COUNT(Age),Age FROM Client GROUP BY Age HAVING Age >= 30;
SELECT * FROM Client ORDER BY Age desc LIMIT 5;
SELECT * FROM Client ORDER BY Age asc LIMIT 5;
SELECT * FROM Client ORDER BY Age asc LIMIT 5 OFFSET 2;
SELECT * FROM Client ORDER BY Age ASC LIMIT 2 , 5;

