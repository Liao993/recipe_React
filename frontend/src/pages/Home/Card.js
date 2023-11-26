import { Link } from "react-router-dom";

const Card = ({ _id, dish, country }) => {
  return (
    <div className="recipe-card" key={_id}>
      <Link to={`/recipes/${_id}`}></Link>
      <h2>{dish}</h2>
      <h3>{country}</h3>
    </div>
  );
};

export default Card;
