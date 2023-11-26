import { useState } from "react";
import Card from "./Card";

function RecipeList({ recipes, query, title }) {
  const [food, setFood] = useState(recipes);

  //Search
  const mySearch = (query) => {
    setFood(
      // eslint-disable-next-line array-callback-return
      recipes.filter((post) => {
        // if search is empty, then return all recipes, else return filtered data
        if (query === "") {
          return post;
        } else if (post.category.toLowerCase().includes(query.toLowerCase())) {
          return post;
        } else if (post.dish.toLowerCase().includes(query.toLowerCase())) {
          return post;
        } else if (post.country.toLowerCase().includes(query.toLowerCase())) {
          return post;
        } else if (
          post.ingredient.toLowerCase().includes(query.toLowerCase())
        ) {
          return post;
        }
      })
    );
  };
  return (
    <div className="recipe-list">
      <button onClick={() => mySearch(query)}>My Search</button>
      <h2>{title}</h2>
      <div className="recipe-preview">
        {food.map((recipe) => (
          <Card key={recipe._id} {...recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
