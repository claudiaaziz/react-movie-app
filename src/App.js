import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  
  const getMovieRequest = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `http://www.omdbapi.com/?s=barbie&apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieListHeading heading={"Movies"} />
        <SearchBar />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
