const SearchBar = ({
  query,
  setQuery,
  queryingredient,
  setQueryIngredient,
}) => {
  return (
    <div className="search-bar">
      <input
        placeholder="Find your recipe"
        value={query} // value returns inputted data
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
