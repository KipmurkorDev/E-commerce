CREATE PROCEDURE updateCart(@id_product varchar(100),  @name_product varchar(100),
 @description VARCHAR(100), 
 @price money, @discount_rate int,
  @image_url 
  varchar(400),
   @quantity INT,
    @amount INT
  )
  AS
  BEGIN
  UPDATE cart
  SET name_product=@name_product, description=@description, price=@price, discount_rate =@discount_rate, image_url=@image_url, quantity=@quantity, amount=@amount
   WHERE id_product=@id_product
 END