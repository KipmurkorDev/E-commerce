const express = require("express");
const {
  getProducts,
  getProduct,
  addproduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcotrollers");
const { userVerification } = require("../Midleware/tokeVerification");

const router = express.Router();

router.get("/",userVerification, getProducts);
router.get("/:id_product", getProduct);
router.post("" , addproduct);
router.put("/:id_product", updateProduct);
router.delete("/:id_product", deleteProduct);

module.exports = {
  router,
};
