const { Schema, model } = require("mongoose");

const ShopSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    phonenumber: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    delivery: {
      type: Boolean,
      required: false
    },
    payment_methos: [
      {
        type: Schema.Types.ObjectId,
        required: false
      }
    ],
    opening_hours: [
      {
        type: String,
        required: false
      }
    ],
    social_media: String
  },
  {
    timestamps: true
  }
);

module.exports = model("Shop", ShopSchema);
