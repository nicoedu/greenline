const { loginValidation } = require("../models/Validation");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async login(req, res) {
    const credentials = req.body;

    const { error } = loginValidation(credentials);
    if (error) return res.status(400).send(error.detailt[0].message);

    const user = await User.findOne({
      username: credentials.username
    }).select("+password");

    if (!user)
      return res.json({ ok: false, message: "Usuário ou senha inválidos" });

    const validPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Usuário ou senha inválidos");

    //Create token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token);

    return res.json({ ok: true, token: token });
  }
};
