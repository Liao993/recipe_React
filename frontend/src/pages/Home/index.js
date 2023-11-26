import { useState } from "react";

import RecipeList from "./RecipeList";
//import { getRecipes } from "../../services/JsonServerClient";
//import useFetch from "../../hooks/useFetch";

import useFetch from "../../hooks/useFetch";

const Home = () => {
  //receive all data
  const { data } = useFetch();

  return (
    <div className="home">
      {data && <RecipeList recipes={data} title="Recipes List" />}
    </div>
  );
};

export default Home;
