const RecipeList = ({ recipes, title }) => {
  //const recipes = props.the_recipe;
  //const title = props.title;

  return (
    <div className="recipe-list">
      <h2>{title}</h2>
      {recipes.map((recipe) => (
        <div className="recipe-preview" key={recipe.id}>
          <h2>{recipe.cusine}</h2>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
