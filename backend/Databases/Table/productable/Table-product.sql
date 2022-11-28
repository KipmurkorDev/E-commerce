CREATE TABLE products(
    id_product varchar(100), 
    name_product varchar(50),
    description VARCHAR(100),
    price int,
    discount_rate int,
    image_url VARCHAR(350),
    isDelete BIT DEFAULT '0'
    )