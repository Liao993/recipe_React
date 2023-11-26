import Card from "./Card";

function RecipeList({ recipes, query, title }) {
  return (
    <div className="recipe-list">
      <h2>{title}</h2>
      <div className="recipe-preview">
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
            } else if (
              post.country.toLowerCase().includes(query.toLowerCase())
            ) {
              return post;
            } else if (
              post.ingredient.toLowerCase().includes(query.toLowerCase())
            ) {
              return post;
            }
          })

          .map((recipe) => (
            // map is function like loop, to get all infromation of filtered data, and have link for each recipe
            // The key prop is important for React to efficiently update and re-render lists of elements.
            // ... can send all data in recipe
            <Card key={recipe._id} {...recipe} />
          ))}
      </div>
    </div>
  );
}

export default RecipeList;
