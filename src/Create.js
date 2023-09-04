import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [dish, setDish] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [process, setProcess] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("main");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  // Function to capitalize the first letter of each word
  const capitalizeWords = (input) => {
    return input
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // function to catch submitted data
  const handleSubmit = (e) => {
    // remove brower refresh (default behavior)
    e.preventDefault();

    // Capitalize the words in the 'dish' input
    const capitalizedDish = capitalizeWords(dish);

    // a new recipe content
    const recipe = {
      dish: capitalizedDish,
      ingredient,
      process,
      country,
      category,
    };
    console.log(recipe);

    setIsPending(true);

    // send created data to json.server
    fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add recipe");
        }
        return response.json();
      })
      .then(() => {
        console.log("New Recipe Added");
        setIsPending(false);
        navigate("/"); // go to the home page
      })
      .catch((error) => {
        console.error("Error adding recipe:", error);
        setIsPending(false);
      });
  };

  // input form
  return (
    <div className="create">
      <h2>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Food Name</label>
        <input
          type="text"
          required
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        />
        <label>Ingredient</label>
        <textarea
          required
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        ></textarea>
        <label>Process</label>
        <textarea
          required
          value={process}
          onChange={(e) => setProcess(e.target.value)}
        ></textarea>
        <label>Country/Origin</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="main">main-course</option>
          <option value="side-dish">side-dish</option>
          <option value="soup">soup</option>
          <option value="salad">salad</option>
          <option value="dessert">dessert</option>
          <option value="drink">drink</option>
        </select>
        {!isPending && <button>Add New Dish</button>}
        {isPending && <button disabled>Adding new dish ...</button>}
      </form>
    </div>
  );
};

export default Create;
