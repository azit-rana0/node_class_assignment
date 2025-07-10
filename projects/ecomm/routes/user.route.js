const express = require("express");

const {
  register,
  login,
  forgetPassword,
  resetPassword,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forget-password", forgetPassword);
router.post("/rest-password", resetPassword);

module.exports = router;
