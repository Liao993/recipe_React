import { Link } from "react-router-dom";

const Card = ({ _id, dish }) => {
  return (
    <div className="recipe-preview" key={_id}>
      <Link to={`/recipes/${_id}`}></Link>
      <h2>{dish}</h2>
    </div>
  );
};

export default Card;
