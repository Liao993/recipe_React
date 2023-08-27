import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();

  return (
    <div className="recipe-Details">
      <h2>{id}</h2>
    </div>
  );
};

export default RecipeDetails;
