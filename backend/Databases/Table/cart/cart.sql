CREATE TABLE cart( id_product varchar(100), 
    name_product varchar(50),
    description VARCHAR(100),
    price money,
    discount_rate int,
    image_url VARCHAR(400),
    isDelete BIT DEFAULT '0',
    quantity INT,
    amount INT
    )