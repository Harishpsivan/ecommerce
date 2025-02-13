const express = require("express");
const productController = require("../controller/productController");

const productRouter = express.Router();

productRouter.get("/api/products", productController.getAllProducts );

productRouter.get("/api/products/:id", productController.getProductById );

module.exports = productRouter