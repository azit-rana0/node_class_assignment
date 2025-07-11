const express = require("express");

const { listProduct } = require("../controllers/product.controller");

const router = express.Router();

router.get("/list", listProduct);
module.exports = router;
