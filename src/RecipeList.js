import { Link } from "react-router-dom";

const RecipeList = ({ recipes, query, title }) => {
  return (
    <div className="recipe-list">
      <h2>{title}</h2>
      {recipes

        .filter((post) => {
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
          }
        })

        .map((recipe) => (
          <div className="recipe-preview" key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h2>{recipe.dish}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
