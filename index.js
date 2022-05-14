const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./router/products");
const db = require("./db");
// const product = require("./module/products");

app.use(cors());
app.use(express.json());
dotenv.config();

db.connect();

app.use("/", (req, res, next) => {
  console.log("MiddleWare");
  next();
});

app.use("/product", route);
// app.get("/get", product.findProduct);

app.listen(process.env.PORT || 3010, () => {
  console.log("Server Started Successfully");
});
