import { Link } from "react-router-dom";

const Card = ({ _id, dish, country, image }) => {
  console.log(image);
  return (
    <div className="recipe-card" key={_id}>
      <Link to={`/recipes/${_id}`}>
        <img src={require(`../../assets/img/${image}`)} alt={dish} />
        <div className="recipe-word">
          <h2>{dish}</h2>
          <h3>{country}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
