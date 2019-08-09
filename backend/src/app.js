const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
require("dotenv/config");

//midlewares
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

//Listenner
app.listen(3333);
