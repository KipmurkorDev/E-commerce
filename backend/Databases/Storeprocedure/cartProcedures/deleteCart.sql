CREATE PROCEDURE deleteCart(@id_product varchar(100))
  AS
  BEGIN
  UPDATE cart
  SET  isDelete=1
  WHERE id_product=@id_product
END