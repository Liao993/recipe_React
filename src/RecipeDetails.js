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
            {data.category} - {data.dish}
          </h2>
          <h3>{data.country}</h3>
          <p>Ingredient {data.ingredient}</p>
          <div>
            <h1>How to Cook</h1>
            {data.process}
          </div>
          <button onClick={hanldeClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default RecipeDetails;
