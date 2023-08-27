import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/recipes/" + id
  );

  return (
    <div className="recipe-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2> {data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
    </div>
  );
};

export default RecipeDetails;
