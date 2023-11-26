import { useState } from "react";

import RecipeList from "./RecipeList";
//import { getRecipes } from "../../services/JsonServerClient";
//import useFetch from "../../hooks/useFetch";
import SearchBar from "./SearchBar";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  //receive all data
  const { data } = useFetch();

  // search bar
  const [query, setQuery] = useState("");

  return (
    <div className="home">
      <SearchBar query={query} setQuery={setQuery} />
      {data && <RecipeList recipes={data} query={query} title="Recipes List" />}
    </div>
  );
};

export default Home;
