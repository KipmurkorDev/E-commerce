const express = require("express");
const {
  getCart,
  deleteCart,
  updateCart,
  addCart,
} = require("../controllers/cartController");
const { userVerification } = require("../Midleware/tokeVerification");
const cartRouter = express.Router();

cartRouter.get("/", userVerification,getCart);
cartRouter.post("", addCart);
cartRouter.put("/:id_product", updateCart);
cartRouter.delete("/:id_product", deleteCart);

module.exports = {
  cartRouter,
};
