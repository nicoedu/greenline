const express = require("express");
const ShopController = require("./controller/ShopController");
const ProductController = require("./controller/ProductController");

const routes = express.Router();

routes.post("/shop", ShopController.store);
routes.get("/shop/:shopId", ShopController.get);
routes.get("/shop", ShopController.index);
routes.delete("/shop/:shopId", ShopController.delete);
routes.post("/shop/edit", ShopController.update);

routes.post("/shop/product", ProductController.store);
routes.get("/shop/product/:productId", ProductController.get);
routes.get("/shop/product/list/:shopId", ProductController.index);
routes.delete("/shop/product/:productId", ProductController.delete);
routes.post("/shop/product/edit/:productId", ProductController.update);

module.exports = routes;
