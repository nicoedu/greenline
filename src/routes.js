const express = require("express");
const ShopController = require("./controller/ShopController");

const routes = express.Router();

routes.post("/shop", ShopController.store);
routes.get("/shop", ShopController.index);

module.exports = routes;
