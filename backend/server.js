const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const MONGO_URI="mongodb+srv://user:user@cluster0.mh1ce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define Schemas
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Define Models
const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);

// API Endpoints
app.get("/", async (req, res) => {
  res.status(200).json({ message: "Server is running successfully" });
});

// Fetch all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", error: err });
  }
});

// User registration
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to register user", error: err });
  }
});

// User login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to login", error: err });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});