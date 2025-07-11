const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const UserModel = require("../models/user.model");

dotenv.config();

const register = async (req, res) => {
  // Todo: Write validation for req body
  await UserModel.create(req.body);
  res.json({
    success: true,
    message: "Dummy register API",
  });
};

const login = async (req, res) => {
  // Match the email and password stored in db
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not registed, please create an account first",
    });
  }

  const plainTextPassword = req.body.password; // User input
  const hashedPassword = user.password; // DB stored password

  const isPasswordMatched = await bcrypt.compare(
    plainTextPassword,
    hashedPassword
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      success: false,
      message: "Incorrect username or password",
    });
  }
  const jwtData = {
    id: user._id,
    email: user.email,
  };
  const token = jwt.sign(jwtData, process.env.JWT_SECRET_KEY, {
    expiresIn: "1m",
  });

  // res.cookie("jwt", token); // To set jwt in browser cookie

  res.json({
    success: true,
    message: "Logged in successfully",
    token: token, // JMT (json web token)
  });
};

const forgetPassword = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy forget password API",
  });
};

const resetPassword = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy reset password API",
  });
};

const userController = {
  register,
  login,
  forgetPassword,
  resetPassword,
};

module.exports = userController;
