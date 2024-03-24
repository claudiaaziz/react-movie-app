const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div className="col col-sm-4">
      <input
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="form-control"
        placeholder="Search"
      ></input> 
    </div>
  )
}

export default SearchBar