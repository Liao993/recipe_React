/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

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
  const hanldeClick = () => {
    fetch("http://localhost:8000/recipes/" + id, { method: "DELETE" }).then(
      () => {
        navigate("/");
      }
    );
  };

  // Create a mapping between image keys and their import paths
  const imageMap = (url) => {
    return require(url);
    // Add more images and keys as needed
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
                src={require(`./img/${data.image}`)}
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
          <button onClick={hanldeClick}>delete</button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
