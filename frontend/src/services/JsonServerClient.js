// get all recipes
const getRecipes = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/recipes");
    const json = await response.json();
    return json;
  } catch (e) {
    alert(e.message);
  }
};

// get a recipe fetch method
const getRecipeDetails = async (id) => {
  try {
    const response = await fetch("http://localhost:4000/api/recipes/" + id);
    const json = await response.json();
    return json;
  } catch (e) {
    alert(e.message);
  }
};

// create a recipe fetch method
const createRecipe = async (recipe) => {
  try {
    const response = await fetch("http://localhost:4000/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    });

    if (!response.ok) {
      throw new Error("Failed to add recipe");
    }
  } catch (error) {
    throw error;
  }
};

//update recipe fetch method
const updateRecipe = async ({ editid, recipe }) => {
  try {
    const response = await fetch(
      "http://localhost:4000/api/recipes/" + editid,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to edit recipe");
    }
  } catch (error) {
    alert(error);
  }
};
//delete recipe fetch method
const deleteRecipe = async (id) => {
  try {
    const response = await fetch("http://localhost:4000/api/recipes/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete recipe");
    }
  } catch (error) {
    throw error;
  }
};

export {
  getRecipes,
  getRecipeDetails,
  updateRecipe,
  createRecipe,
  deleteRecipe,
};
