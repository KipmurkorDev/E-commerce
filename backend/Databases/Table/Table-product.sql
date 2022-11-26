
  CREATE TABLE products (
    id_product int not null primary KEY, 
    name_product varchar(50),
    description VARCHAR(100),
    price int,
     discount_rate int,
    image_url VARCHAR(50),
    isDelete BIT,
    )