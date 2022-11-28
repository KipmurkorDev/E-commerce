CREATE PROCEDURE addCart(@id_product varchar(100),  @name_product varchar(100),
 @description VARCHAR(100), 
 @price money, @discount_rate int,
  @image_url 
  varchar(400),
  @quantity INT,
    @amount INT
  )
  AS
  BEGIN
  INSERT cart(id_product, name_product, description, price, discount_rate, image_url, quantity, amount ) VALUES (@id_product, @name_product, @description, @price, @discount_rate, @image_url,@quantity, @amount)
END