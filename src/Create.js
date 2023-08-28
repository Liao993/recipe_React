import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  // catch submitted data
  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { title, body, author };
    console.log(recipe);

    setIsPending(true);

    // send data to json.server
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
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog ...</button>}
      </form>
    </div>
  );
};

export default Create;
