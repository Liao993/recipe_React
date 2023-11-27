import { useState } from "react";
import Card from "./Card";

import SearchBar from "./SearchBar";

function RecipeList({ recipes, title }) {
  const [food, setFood] = useState(recipes);

  const [query, setQuery] = useState("");

  //Filter Category

  const filterCategory = (category) => {
    setFood(
      recipes.filter((item) => {
        if (category === "all") {
          return item;
        } else {
          return item.category === category;
        }
      })
    );
  };

  //Search Function
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
      <div className="recipe-filter">
        <div className="recipe-filter-category">
          <h2>Filter Category</h2>
          <div className="recipe-filter-category-button">
            <button onClick={() => filterCategory("all")}>All dishes</button>
            <button onClick={() => filterCategory("main")}>Main courses</button>
            <button onClick={() => filterCategory("side")}>Side dishes</button>
            <button onClick={() => filterCategory("soup")}>Soup</button>
            <button onClick={() => filterCategory("dessert")}>Dessert</button>
            <button onClick={() => filterCategory("salad")}>Salad</button>
            <button onClick={() => filterCategory("drink")}>Drink</button>
          </div>
        </div>
        <SearchBar
          query={query}
          setQuery={setQuery}
          searchfunction={mySearch}
        />
      </div>
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
