const express = require("express");
const {
  getCart,
  deleteCart,
  updateCart,
  addCart,
} = require("../controllers/cartController");
const { userVerification } = require("../Midleware/tokeVerification");
const cartRouter = express.Router();

cartRouter.get("/", userVerification, getCart);
cartRouter.post("", userVerification, addCart);
cartRouter.put("/:id_product", userVerification, updateCart);
cartRouter.delete("/:id_product", userVerification, deleteCart);

module.exports = {
  cartRouter,
};
