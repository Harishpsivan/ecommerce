const express = require("express");
const Product = require("../models/Product");

const productRouter = express.Router();

productRouter.get("/api/products", async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch products", error: err });
    }
  });



  module.exports = productRouter