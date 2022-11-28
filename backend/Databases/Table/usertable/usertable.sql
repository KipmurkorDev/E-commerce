create TABLE users (
    user_id int  IDENTITY, 
    user_name VARCHAR(100),
    email VARCHAR(100),
    user_password VARCHAR(100),
    isSent BIT DEFAULT '0'
)