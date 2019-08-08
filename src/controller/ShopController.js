const Shop = require("../models/Shop");

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
  }
};
