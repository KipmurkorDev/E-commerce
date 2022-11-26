CREATE PROCEDURE addproduct(@id_product INT,  @name_product varchar(100),
 @description VARCHAR(100), 
 @price money, @discount_rate int,
  @image_url 
  varchar(50),
 isDelete=0

  )
  AS
  BEGIN
  INSERT products(id_product, name_product, description, price, discount_rate, image_url ) VALUES (@id_product, @name_product, @description, @price, @discount_rate, @image_url )
END