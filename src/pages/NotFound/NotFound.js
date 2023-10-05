import { Link } from "react-router-dom";

//Not Found Page and redirect to home page
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry, we can't find the page</h2>
      <Link to="/">Back to the home page</Link>
    </div>
  );
};

export default NotFound;
