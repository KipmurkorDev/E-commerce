CREATE PROCEDURE updateEmail( @email VARCHAR(100) )
AS
BEGIN
UPDATE users
SET isSent =1
WHERE email = @email
END