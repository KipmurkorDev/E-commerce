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
router.get("/:id_product", userVerification, getProduct);
router.post("" , userVerification, addproduct);
router.put("/:id_product", userVerification, updateProduct);
router.delete("/:id_product", userVerification, deleteProduct);

module.exports = {
  router,
};
