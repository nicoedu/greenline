const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
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
      required: false
    },
    value: {
      type: Number,
      required: false
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

module.exports = model("Product", ProductSchema);
