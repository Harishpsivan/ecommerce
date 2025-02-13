const express = require("express");
const userController = require("../controller/userController");


const userRouter = express.Router();

userRouter.post("/api/register",userController.RegisterUser);
  
  // User login
userRouter.post("/api/login", userController.LoginUser);
  


module.exports = userRouter