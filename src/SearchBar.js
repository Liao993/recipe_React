const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-bar">
      <input
        placeholder="Enter your search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
