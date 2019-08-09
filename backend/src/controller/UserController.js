const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { registerValidation } = require("../models/Validation");

module.exports = {
  async store(req, res) {
    const user = req.body;

    const { error } = registerValidation(user);

    if (error) return res.status(400).send(error.details[0].message);

    const UserExists = await User.findOne({
      username: user.username
    });

    if (UserExists)
      return res.json({ ok: false, message: "Usuario já cadastrado" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await User.create({
      username: user.username,
      password: hashPassword
    });

    return res.json({ ok: true });
  },

  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async get(req, res) {
    const { userId } = req.params;

    const user = await User.findById(userId);

    return res.json(user);
  },

  async update(req, res) {
    const { userid } = req.headers;
    const user = req.body;

    const newUser = await User.findByIdAndUpdate(userid, user, {
      new: true
    });

    return res.json(newUser);
  },
  async delete(req, res) {
    const { userid } = req.headers;

    const user = await User.findByIdAndUpdate(userid, {
      $set: { activate: false }
    });
    await user.save();

    return res.json({ ok: true });
  }
};
