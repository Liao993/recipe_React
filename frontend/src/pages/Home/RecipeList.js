import { Link } from "react-router-dom";

function RecipeList({ recipes, query, title }) {
  return (
    <div className="recipe-list">
      <h2>{title}</h2>
      {recipes

        // eslint-disable-next-line array-callback-return
        .filter((post) => {
          // if search is empty, then return all recipes, else return filtered data
          if (query === "") {
            return post;
          } else if (
            post.category.toLowerCase().includes(query.toLowerCase())
          ) {
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

        .map((recipe) => (
          // map is function like loop, to get all infromation of filtered data, and have link for each recipe
          <div className="recipe-preview" key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h2>{recipe.dish}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default RecipeList;
