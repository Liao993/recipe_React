// create a recipe fetch method
const createRecipe = async (recipe) => {
  try {
    const response = await fetch("http://localhost:8000/recipes", {
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

//delete recipe fetch method
const deleteRecipe = async (id) => {
  try {
    const response = await fetch("http://localhost:8000/recipes/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete recipe");
    }
  } catch (error) {
    throw error;
  }
};

export { createRecipe, deleteRecipe };
