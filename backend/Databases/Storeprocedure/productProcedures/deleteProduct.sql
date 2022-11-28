CREATE PROCEDURE deleteProduct(@id_product varchar(100))
  AS
  BEGIN
  UPDATE products
  SET  isDelete=1
  WHERE id_product=@id_product
END