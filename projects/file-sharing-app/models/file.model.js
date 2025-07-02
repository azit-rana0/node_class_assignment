const mongoose = require("mongoose");

const fileSchama = mongoose.Schema(
  {
    originalFileName: {
      type: String,
      required: true,
    },
    midifiedFileName: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
    user: {
      type: String,
      default: "rana@example.com",
    },
    path: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const FileModle = mongoose.model("files", fileSchama);
module.exports = FileModle;
