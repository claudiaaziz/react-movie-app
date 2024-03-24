import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBar from "./components/SearchBar";
import AddFavorites from "./components/AddFavorites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([])

  const getMovieRequest = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `http://www.omdbapi.com/?s=${searchValue}&apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.Search) setMovies(data.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]
    setFavorites(newFavoriteList)
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading={"Movies"} />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} handleFavoritesClick={addFavoriteMovie} FavoriteComponent={AddFavorites}/>
      </div>
    </div>
  );
};

export default App;
