const express = require("express");
const fileController = require("../controllers/file.controller.js");
const uploader = require("../middlewares/fileUpload.js");

const router = express.Router();

router.post("/upload", uploader.single("image"), fileController.uploadFile);

router.post("/share", fileController.shareFile);

// router.get(""); // To be decided later

module.exports = router;
