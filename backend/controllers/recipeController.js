const mongoose = require("mongoose");
const Recipe = require("../models/recipesModels");

// get all recipes
async function getAllRecipe(req, res) {
  const recipes = await Recipe.find({});

  res.status(200).json(recipes);
}

// get a single recipe
const getARecipe = async (req, res) => {
  const { id } = req.params;

  // not valid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe" });
  }

  const recipe = await Recipe.findById(id);

  if (!recipe) {
    return res.status(404).json({ error: "not such recipe" });
  }

  res.status(200).json(recipe);
};

//create a recipe
const createRecipe = async (req, res) => {
  const { dish, ingredient, process, country, category, image, note } =
    req.body;

  try {
    const recipe = await Recipe.create({
      dish,
      ingredient,
      process,
      country,
      category,
      image,
      note,
    });
    res.status(200).json({ "create a recipe": recipe });
  } catch (eror) {
    res.status(404).json({ error: error.message });
  }
};

// delete the recipe
const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  // not valid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe" });
  }

  const recipe = await Recipe.findByIdAndDelete({ _id: id });

  if (!recipe) {
    return res.status(404).json({ error: "not such recipe" });
  }

  res.status(200).json(recipe);
};

// update the recipe
const updateRecipe = async (req, res) => {
  const { id } = req.params;

  // not valid id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe" });
  }

  const recipe = await Recipe.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!recipe) {
    return res.status(404).json({ error: "not such recipe" });
  }

  res.status(200).json(recipe);
};

module.exports = {
  getARecipe,
  getAllRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};
