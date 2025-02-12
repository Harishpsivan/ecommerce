const express = require('express');
const Product = require('../backend/models/Product'); // Ensure this path is correct

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products); // No need for await here
    } catch (error) {
        console.error('Error fetching products:', error); // Log the error
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Add a new product (for admin use)
router.post('/', async (req, res) => {
    const { name, price, image } = req.body;

    // Validate incoming data
    if (!name || !price || !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = new Product({ name, price, image });

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error); // Log the error
        res.status(500).json({ message: 'Error adding product' });
    }
});

// Export the router
module.exports = router;