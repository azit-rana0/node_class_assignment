const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

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
  res.json({
    success: true,
    message: "Logged in successfully",
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
