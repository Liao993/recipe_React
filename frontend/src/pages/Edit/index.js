/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { updateRecipe } from "../../services/JsonServerClient";

const Edit = () => {
  const location = useLocation();

  let editdish = location.state.dish;
  let editingredient = location.state.ingredient;
  let editprocess = location.state.process;
  let editcountry = location.state.country;
  let editcategory = location.state.category;
  let editnote = location.state.note;
  let editid = location.state.recipeId;

  const [dish, setDish] = useState(editdish);
  const [ingredient, setIngredient] = useState(editingredient);
  const [process, setProcess] = useState(editprocess);
  const [country, setCountry] = useState(editcountry);
  const [category, setCategory] = useState(editcategory);
  const [note, setNote] = useState(editnote);

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
  const handleSubmit = async (e) => {
    // remove brower refresh (default behavior)
    e.preventDefault();

    // Capitalize the words in the 'dish' input
    const capitalizedDish = capitalizeWords(dish);
    const imageName = getImageName(dish);

    // a new recipe content
    const recipe = {
      dish: capitalizedDish,
      ingredient,
      process,
      country,
      category,
      note,
      image: imageName,
    };

    setIsPending(true);

    // send created data to json.server
    try {
      await updateRecipe({ editid, recipe });

      setIsPending(false);
      navigate("/");
    } catch (error) {
      console.error("Error adding recipe:", error);
      setIsPending(false);
    }
  };

  // input form
  return (
    <div className="create">
      <h2>Edit your recipe</h2>
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
          <option value="main">main-course</option>
          <option value="side">side-dish</option>
          <option value="soup">soup</option>
          <option value="salad">salad</option>
          <option value="dessert">dessert</option>
          <option value="drink">drink</option>
        </select>
        <label>Note</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        {!isPending && <button>Edit the recipe</button>}
        {isPending && <button disabled>Editing new dish ...</button>}
      </form>
    </div>
  );
};

export default Edit;
