CREATE PROCEDURE addUser (
    @user_name VARCHAR(100),
    @email VARCHAR(100),
    @user_password VARCHAR(100)
)
AS
BEGIN
INSERT users(user_name, email, user_password) VALUES (@user_name,  @email, @user_password)
END