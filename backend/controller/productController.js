const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch products", error: err });
    }
  }



  const getProductById = async (req, res) => {
    try {
      const {id} = req.params;
      const products = await Product.findById(id);
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch products", error: err });
    }
  }


module.exports = {getAllProducts, getProductById}