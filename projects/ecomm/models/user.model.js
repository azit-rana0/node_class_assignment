const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      addressLine1: {
        type: String,
        required: true,
      },
      addressLine2: {
        type: String,
        required: false,
        default: "",
      },
      landMark: {
        type: String,
        required: false,
        default: "",
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

// DB Pre save hook
userSchema.pre("save", async function () {
  // Convert pass into hash
  // Generate salt => To increase the complexity of the hash
  const salt = await bcrypt.genSalt(10);
  // console.log(salt); // Random sequence of alphanumeric chars

  // req.body / the parameter passed to create() method = this
  const passwordHash = await bcrypt.hash(this.password, salt);
  // console.log(passwordHash);
  this.password = passwordHash;
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
