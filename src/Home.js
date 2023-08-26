import { useState } from "react";
import RecipeList from "./RecipeList";

const Home = () => {
  const [recipes, setRecipes] = useState([
    { cusine: "Salmon Pasta", country: "Italian", id: 1 },
    { cusine: "Salmon Junice", country: "Taiwan", id: 2 },
    { cusine: "Salmon Bi", country: "Korean", id: 3 },
  ]);

  return (
    <div className="home">
      <RecipeList recipes={recipes} title="All Recipes" />
    </div>
  );
};

export default Home;
