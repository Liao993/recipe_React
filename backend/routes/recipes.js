const express = require("express");

const {
  createRecipe,
  getARecipe,
  getAllRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

//get all recipes
router.get("/", getAllRecipe);

//get a single recipe
router.get("/:id", getARecipe);

//create a new recipe
router.post("/", createRecipe);

//update the recipe
router.patch("/:id", updateRecipe);

//delete the recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
