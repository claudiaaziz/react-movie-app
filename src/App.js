import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setmovies] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getMovieRequest();
  }, []);

  const getMovieRequest = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?s=Barbie&apiKey=${apiKey}`
    );

    const data = await res.json();
    setmovies(data.Search)
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} key={movies}/>
      </div>
    </div>
  );
};

export default App;
