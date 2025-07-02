const FileModel = require("../models/file.model");
const uploadFile = async (req, res) => {
  console.log(req.file);
  await FileModel.create({
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

const shareFile = async (req, res) => {
  // console.log(req.body._id);
  try {
    const link = "http://localhost:8080/files/" + req.body._id;
    const file = await FileModel.findById(req.body._id);
    console.log(file);
    if (!file) {
      // File does not exists with this id
      throw new Error("Invalid file Id");
      // res.status(404).json({
      //   success: false,
      //   message: "Invalid File Id",
      // });
    }
    res.json({
      success: true,
      message: "File share API",
      result: link,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Invalid File Id",
    });
  }
};

const downloadFile = async (req, res) => {
  console.log(req.params.fileId);
  const file = await FileModel.findById(req.params.fileId);
  console.log(file);
  console.log(file.path);
  res.download(file.path, file.originalFileName);
  return;
};

const fileController = {
  uploadFile,
  shareFile,
  downloadFile,
};

module.exports = fileController;
