import RecipeList from "./RecipeList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/recipes");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {data && <RecipeList recipes={data} title="My All Recipes" />}
    </div>
  );
};

export default Home;
