/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import CapitalizeWords from "../../utilis/CapitalizeWords";

const Create = () => {
  const [dish, setDish] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [process, setProcess] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("main");
  const [note, setNote] = useState("main");

  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  // Function to capitalize the first letter of each word
  const capitalizeWords = (input) => {
    const lowerInput = input.toLowerCase();
    return lowerInput
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Function to autogenerate image name from dish input and I will put image into local file
  const getImageName = (input) => {
    const lowerInput = input.toLowerCase();
    return lowerInput.split(" ").join("") + ".jpg";
  };

  // Function to catch submitted data
  const handleSubmit = (e) => {
    // remove brower refresh (default behavior)
    e.preventDefault();

    // Capitalize the words in the 'dish' input

    const imageName = getImageName(dish);

    // a new recipe content
    const recipe = {
      dish: capitalizeWords(dish),
      ingredient,
      process,
      country,
      category,
      note,
      image: imageName,
    };

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
        <label>
          Ingredient (Please Split each ingredient with " ; (semicolon) " )
        </label>
        <textarea
          required
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        ></textarea>
        <label>
          Process (Please put number order for each step and split them with " ;
          (semicolon)") <br></br>like 1.cook ; 2. eat ; 3.clean
        </label>
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
          <option value="Main-course">main-course</option>
          <option value="Side-dish">side-dish</option>
          <option value="Soup">soup</option>
          <option value="Salad">salad</option>
          <option value="Dessert">dessert</option>
          <option value="Drink">drink</option>
        </select>
        <label>Note</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        {!isPending && <button>Add New Dish</button>}
        {isPending && <button disabled>Adding new dish ...</button>}
      </form>
    </div>
  );
};

export default Create;
