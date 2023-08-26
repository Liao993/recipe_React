import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";

const Home = () => {
  const [recipes, setRecipes] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(" http://localhost:8000/recipes")
      .then((res) => {
        if (!res.ok) {
          throw Error("Error: couldn't fetch the data source");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setRecipes(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {recipes && <RecipeList recipes={recipes} title="All Recipes" />}
    </div>
  );
};

export default Home;
