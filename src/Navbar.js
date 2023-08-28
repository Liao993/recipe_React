import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Henry & Sindy's Recipe</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">Add New Dish</Link>
      </div>
    </nav>
  );
};

export default Navbar;
