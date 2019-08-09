const Shop = require("../models/Shop");
const ObjectId = require("mongodb").ObjectID;

module.exports = {
  async store(req, res) {
    const { name, description } = req.body;

    const shopExists = await Shop.findOne({ name: name });

    if (shopExists) {
      return res.json({ ok: false, message: "Nome já em uso" });
    }

    const shop = await Shop.create({
      name: name,
      description: description
    });

    return res.json({ ok: true });
  },

  async index(req, res) {
    const shops = await Shop.find();

    return res.json(shops);
  },

  async get(req, res) {
    const { shopId } = req.params;

    const shop = await Shop.findById(shopId);

    return res.json(shop);
  },

  async update(req, res) {
    const { shopid } = req.headers;
    const shop = req.body;

    const newShop = await Shop.findByIdAndUpdate(
      shopid,
      { $set: shop },
      { new: true }
    );

    return res.json(newShop);
  },

  async delete(req, res) {
    const { shopid } = req.headers;

    const shop = await Shop.findByIdAndUpdate(shopid, { activate: false });
    await shop.save();

    return res.json({ ok: true });
  }
};
