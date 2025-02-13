const User = require("../models/User");
var jwt = require('jsonwebtoken');


const RegisterUser =  async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      res.status(500).json({ message: "Failed to register user", error: err });
    }
  }


const LoginUser = async (req, res) => {
const { email, password } = req.body;
try {
    const user = await User.findOne({ email, password });
    if (user) {
    const token =  jwt.sign({id:user._id ,isAdmin:user.isAdmin}, process.env.JWT_SECRET);
    res.status(200).json({ message: "Login successful", token });
    } else {
    res.status(401).json({ message: "Invalid email or password" });
    }
} catch (err) {
    res.status(500).json({ message: "Failed to login", error: err });
}
}


module.exports = {RegisterUser, LoginUser}