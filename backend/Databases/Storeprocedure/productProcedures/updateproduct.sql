CREATE PROCEDURE updatProduct(@id_product varchar(100),  @name_product varchar(100),
 @description VARCHAR(100), 
 @price money, @discount_rate int,
  @image_url 
  varchar(300)
  )
  AS
  BEGIN
  UPDATE products
  SET name_product=@name_product, description=@description, price=@price, discount_rate =@discount_rate, image_url=@image_url
   WHERE id_product=@id_product
 END
