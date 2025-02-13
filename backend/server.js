const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./connection.js");
const User = require("./models/User.js");
const Product = require("./models/Product.js");
const productRouter = require("./routes/productRoute.js");
const userRouter = require("./routes/userRoute.js");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectDB();

// API Endpoints
app.get("/", async (req, res) => {
  res.status(200).json({ message: "Server is running successfully" });
});

// Fetch all products
app.use('/', productRouter)
app.use('/',userRouter)

// User registration

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});