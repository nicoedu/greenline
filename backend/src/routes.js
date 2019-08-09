const express = require("express");
const ShopController = require("./controller/ShopController");
const ProductController = require("./controller/ProductController");
const UserController = require("./controller/UserController");
const AuthController = require("./controller/AuthController");
const verifyToken = require("./verifyToken");

const routes = express.Router();

//Login
routes.post("/login", AuthController.login);

//Routes to shop
routes.post("/shop", verifyToken, ShopController.store);
routes.get("/shop/:shopId", ShopController.get);
routes.get("/shop", ShopController.index);
routes.delete("/shop/:shopId", verifyToken, ShopController.delete);
routes.post("/shop/edit", verifyToken, ShopController.update);

//Routes to products
routes.post("/shop/product", verifyToken, ProductController.store);
routes.get("/shop/product/:productId", ProductController.get);
routes.get("/shop/product/list/:shopId", ProductController.index);
routes.delete(
  "/shop/product/:productId",
  verifyToken,
  ProductController.delete
);
routes.post(
  "/shop/product/edit/:productId",
  verifyToken,
  ProductController.update
);

//Routes to users
routes.post("/user", UserController.store);
routes.get("/user/:userId", UserController.get);
routes.get("/user", UserController.index);
routes.delete("/user", verifyToken, UserController.delete);
routes.post("/user/edit", verifyToken, UserController.update);

module.exports = routes;
