const path = require("path");
const multer = require("multer");
const { v4: uuid } = require("uuid");

// Multer configuration & setup
/**
 * 1. Where will the file be stored? (RAM, HDD/SDD => storage path etc)
 * 2. Which types of files are allowed?
 * 3. Size limitation?
 * 4. Name of the file after upload?
 */

/**
 * 1. Initialize Storage infomation
 * 2. Connect storage with multer instance / multer initialization
 */

const fileStoragePath = path.join(__dirname, "../uploaded_files");

const storage = multer.diskStorage({
  destination: fileStoragePath,
  filename: (req, file, cb) => {
    const fileName = uuid() + path.extname(file.originalname); // logic to create filename
    cb(null, fileName);
  },
});

const uploader = multer({
  storage: storage,
});

module.exports = uploader;
