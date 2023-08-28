import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/recipes/" + id
  );
  const navigate = useNavigate();

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
          <h2> {data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={hanldeClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default RecipeDetails;
