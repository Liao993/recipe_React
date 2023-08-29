import RecipeList from "./RecipeList";
import useFetch from "./useFetch";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/recipes");
  const [query, setQuery] = useState("");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      <SearchBar query={query} setQuery={setQuery} />
      {data && <RecipeList recipes={data} query={query} title="Recipes List" />}
    </div>
  );
};

export default Home;
