const FileModle = require("../models/file.model.js");
const uploadFile = async (req, res) => {
  console.log(req.file);
  await FileModle.create({
    originalFileName: req.file.originalname,
    midifiedFileName: req.file.filename,
    size: req.file.size,
    user: req.body.username,
    path: req.file.path,
  });
  res.json({
    success: true,
    message: "File uploaded successfully",
  });
};

const shareFile = (req, res) => {
  res.json({
    success: true,
    message: "File share API",
  });
};

const fileController = {
  uploadFile,
  shareFile,
};

module.exports = fileController;
