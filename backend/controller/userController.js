const User = require("../models/User");


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
    res.json({ message: "Login successful", user });
    } else {
    res.status(401).json({ message: "Invalid email or password" });
    }
} catch (err) {
    res.status(500).json({ message: "Failed to login", error: err });
}
}


module.exports = {RegisterUser, LoginUser}