import MovieIndexItem from "./MovieIndexItem";

const MovieList = ({ movies }) => {

  return (
    <>
      {movies.map(movie => <MovieIndexItem movie={movie} key={movie.Title}/>)}
    </>
  )
}

export default MovieList