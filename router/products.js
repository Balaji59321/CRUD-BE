const express = require("express");
const route = express.Router();
const product = require("./../module/products");

route.get("/get", product.findProduct);
route.post("/add", product.createProduct);
route.put("/update/:id", product.updateProduct);
route.delete("/delete/:id", product.deleteProduct);

module.exports = route;
