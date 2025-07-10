const UserModel = require("../models/user.model");

const register = async (req, res) => {
  // Todo: Write validation for req body
  await UserModel.create(req.body);
  res.json({
    success: true,
    message: "Dummy register API",
  });
};

const login = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy login API",
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
