const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    alternative_value: Number,
    quantity: {
      type: Number,
      required: true
    },
    shop: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", ProductSchema);
