const express = require("express");
const productController = require("../controller/productController");
const verifyAdmin = require("../middleware/verifyAdmin");

const productRouter = express.Router();

productRouter.get("/api/products", productController.getAllProducts );

productRouter.get("/api/products/:id", productController.getProductById );
productRouter.post("/api/products/upload", verifyAdmin, productController.uploadProduct );


module.exports = productRouter