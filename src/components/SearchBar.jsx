const SearchBar = () => {
  return (
    <div className="col col-sm-4">
      <input
        type="search"
        // onChange={setSearchValue((e) => e.target.value)}
        // value={searchValue}
        className="form-control"
        placeholder="Search"
      ></input> 
    </div>
  )
}

export default SearchBar