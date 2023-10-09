import { useState } from "react";

import RecipeList from "./RecipeList";
import useFetch from "../../hooks/useFetch";
import SearchBar from "./SearchBar";

const Home = () => {
  // get data from backend json-server
  const { data, isPending, error } = useFetch("http://localhost:8000/recipes");

  // search bar
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
