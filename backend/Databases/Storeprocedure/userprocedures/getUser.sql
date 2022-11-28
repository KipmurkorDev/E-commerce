CREATE PROCEDURE getUser(@email varchar(100))
AS
BEGIN
BEGIN
SELECT * FROM users
WHERE email= @email
END