CREATE PROCEDURE deleteProduct(@id_product INT)
  AS
  BEGIN
  UPDATE products
  SET  isDelete=1
  WHERE id_product=@id_product
END