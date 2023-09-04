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
      .split(",")
      .map((ingredient, index) => <li key={index}>{ingredient.trim()}</li>);
  };

  //Function to split process by comma
  const splitProcess = (process) => {
    return process.split("/").map((step, index) => (
      <li key={index}>
        {index + 1} . {step.trim()}
      </li>
    ));
  };

  // delete recipe function
  const hanldeClick = () => {
    fetch("http://localhost:8000/recipes/" + id, { method: "DELETE" }).then(
      () => {
        navigate("/");
      }
    );
  };

  return (
    <div className="recipe-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>
            {" "}
            {data.category} - {data.dish} ({data.country})
          </h2>
          <h3>Ingredient</h3>
          <p>{splitIngredients(data.ingredient)}</p>
          <div>
            <h3>How to Cook</h3>
            <ul> {splitProcess(data.process)}</ul>
          </div>
          <button onClick={hanldeClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default RecipeDetails;
