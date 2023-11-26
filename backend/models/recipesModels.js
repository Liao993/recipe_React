const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  dish: {
    type: String,
    require: true,
  },
  ingredient: {
    type: String,
    require: true,
  },
  process: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  note: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
