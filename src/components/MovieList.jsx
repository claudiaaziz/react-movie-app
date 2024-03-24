import MovieIndexItem from "./MovieIndexItem";

const MovieList = ({ movies }) => {

  return (
    <>
      {movies.map(movie => <MovieIndexItem movie={movie} key={movie.Title+movie.Year}/>)}
    </>
  )
}

export default MovieList