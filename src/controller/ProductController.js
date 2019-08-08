const Product = require("../models/Product");

module.exports = {
  async store(req, res) {
    const product = req.body;
    const { shopid } = req.headers;

    const ProductExists = await Product.findOne({
      name: product.name,
      description: product.description
    });

    if (ProductExists) {
      return res.json({ ok: false, message: "Produto já em cadastrado" });
    }

    const newProduct = await Product.create({
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      shop: shopid
    });

    return res.json({ ok: true });
  },

  async index(req, res) {
    const { shopId } = req.params;
    const products = await Product.find({ shop: shopId });

    return res.json(products);
  },

  async get(req, res) {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    return res.json(product);
  },

  async update(req, res) {
    const { productId } = req.params;
    const product = req.body;

    const newShop = await Product.findByIdAndUpdate(productId, product, {
      new: true
    });

    return res.json(newShop);
  },
  async delete(req, res) {
    const { productId } = req.params;

    const newShop = await Product.findByIdAndDelete(productId);

    return res.json({ ok: true });
  }
};
