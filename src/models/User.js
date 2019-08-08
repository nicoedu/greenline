const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phonenumber: {
      type: String,
      required: true
    },
    address: String,
    image: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
