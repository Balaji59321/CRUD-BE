const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  id: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    minlength: 5,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  variant: {
    type: Object,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product", tableSchema);
module.exports = Product;
