USE bank;
SELECT 
    idClient,
    FirstName,
    LastName,
    Client_idClient,
    Sum,
    idApplication
FROM bank.client AS C
INNER JOIN bank.Application AS A 
ON A.Client_idClient = C.idClient;

SELECT * FROM bank.client as C  
RIGHT JOIN bank.Application as A 
ON A.Client_idClient=C.idClient;

SELECT * FROM bank.client as C 
LEFT JOIN bank.Application as A 
ON A.Client_idClient=C.idClient;
