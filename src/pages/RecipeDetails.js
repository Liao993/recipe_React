/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";

const RecipeDetails = () => {
  // catch id and the data
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/recipes/" + id
  );
  // function for moving the other page
  const navigate = useNavigate();

  // Function to split ingredients by comma
  const splitIngredients = (ingredients) => {
    return ingredients
      .split(";")
      .map((ingredient, index) => <li key={index}>{ingredient.trim()}</li>);
  };

  //Function to split process by comma
  const splitProcess = (process) => {
    return process
      .split(";")
      .map((step, index) => <li key={index}> {step.trim()}</li>);
  };

  // delete recipe function
  const hanldeEdit = () => {
    navigate("/edit", {
      state: {
        recipeId: id,
        dish: data.dish,
        process: data.process,
        ingredient: data.ingredient,
        country: data.country,
        category: data.category,
        note: data.note,
      },
    });
  };
  // delete recipe function
  const hanldeDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Do you want to delete this recipe")) {
      fetch("http://localhost:8000/recipes/" + id, { method: "DELETE" }).then(
        () => {
          navigate("/");
        }
      );
    } else {
      navigate("/");
    }
  };

  return (
    <div className="recipe-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <h2>
            {" "}
            {data.category} - {data.dish} ({data.country})
          </h2>
          <div className="ingredient-picture">
            <div className="ingredient">
              <h3>Ingredient</h3>
              <p>{splitIngredients(data.ingredient)}</p>
            </div>
            <div className="picutre">
              <img
                src={require(`../assets/img/${data.image}`)}
                alt={data.image}
                height={200}
                width={200}
              />
            </div>
          </div>
          <div>
            <h3>How to Cook</h3>
            <ul> {splitProcess(data.process)}</ul>
          </div>
          <div>
            <h3>Note :</h3>
            <p> {data.note}</p>
          </div>
          <button onClick={hanldeDelete}>delete</button>
          <button onClick={hanldeEdit}>edit</button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
