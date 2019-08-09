const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    phonenumber: {
      type: String,
      required: false
    },
    address: String,
    image: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
