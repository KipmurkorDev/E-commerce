const sqlConfig = require("../Config/config");
const sql = require("mssql");

const getCart = async (req, res) => {
  try {
    const pool = await sql.connect(sqlConfig);
    const response = await pool.request().execute("getCarts");
    const products = await response.recordset;
    res.json(products);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const addCart = async (req, res) => {
  try {
    const {
      id_product,
      name_product,
      description,
      price,
      discount_rate,
      image_url,
      quantity,
      amount
    } = req.body;
    const pool = await sql.connect(sqlConfig);
    await pool
      .request()
      .input("id_product", id_product)
      .input("name_product", name_product)
      .input("description", description)
      .input("price", price)
      .input("discount_rate", discount_rate)
      .input("quantity", quantity)
      .input("amount", amount)
      .input("image_url", image_url)
      .execute("addCart");

    res.status(201).json({ message: "Product Inserted into cart" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateCart = async (req, res) => {
  try {
    const { id_product } = req.params;
    const { name_product, description, price, discount_rate, image_url, quantity, amount } =
      req.body;
    const pool = await sql.connect(sqlConfig);
    const product = await (
      await pool.request().input("id_product", id_product).execute("getCart")
    ).recordset;
    if (product.length) {
      await pool
        .request()
        .input("id_product", id_product)
        .input("name_product", name_product)
        .input("description", description)
        .input("price", price)
        .input("discount_rate", discount_rate)
        .input("image_url", image_url)
        .input("quantity", quantity)
        .input("amount", amount)
        .execute("updateCart");
      res.status(200).json({ message: "cart was Updated!!" });
    } else {
      res
        .status(404)
        .json({
          message: `Product with id ${id_product} does not exist in the cart`,
        });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const deleteCart = async (req, res) => {
  try {
    const { id_product } = req.params;
    const pool = await sql.connect(sqlConfig);
    const product = await (
      await pool.request().input("id_product", id_product).execute("getCart")
    ).recordset;

    if (product.length) {
      await pool
        .request()
        .input("id_product", id_product)
        .execute("deleteCart");
      res.status(200).json({ message: "Product Deleted! from the Cart!" });
    } else {
      res
        .status(404)
        .json({
          message: `Product with id ${id_product} does not exist  in the cart`,
        });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  getCart,
  deleteCart,
  updateCart,
  addCart,
};
