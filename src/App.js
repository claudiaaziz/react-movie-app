import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setmovies] = useState([
    {
      Title: "Barbie as Rapunzel",
      Year: "2002",
      imdbID: "tt0313255",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjViZmY0M2MtODUzNy00MjRiLTlhYjQtMjQ4ZDY3ZWFkYWE4XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
    },
    {
      Title: "Barbie of Swan Lake",
      Year: "2003",
      imdbID: "tt0383206",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDAzZDBhODAtNmU4My00NWY5LTlmYTYtZDVkOTk3MDcyMDEyXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
    },
    {
      Title: "Barbie in the 12 Dancing Princesses",
      Year: "2006",
      imdbID: "tt0859594",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzVkMzdiZTItZWFlYS00NmU1LWEwOTYtM2Y1ZGNhODhjOWI0XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
    },
  ]);

  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
