const SearchBar = ({ query, setQuery, searchfunction }) => {
  return (
    <div className="search-bar">
      <input
        placeholder="Find your recipe"
        value={query} // value returns inputted data
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => searchfunction(query)}>My Search</button>
    </div>
  );
};

export default SearchBar;
