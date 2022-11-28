CREATE PROCEDURE getproduct(@id_product varchar(100))
  AS
  BEGIN
  SELECT * FROM products
  WHERE id_product=@id_product AND  isDelete=0
END