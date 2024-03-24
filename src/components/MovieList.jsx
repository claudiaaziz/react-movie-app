import MovieIndexItem from "./MovieIndexItem";

const MovieList = ({ movies, handleFavoritesClick, FavoriteComponent }) => {

  return (
    <>
      {movies.map(movie => <MovieIndexItem movie={movie} key={movie.Title+movie.Year} FavoriteComponent={FavoriteComponent} handleFavoritesClick={handleFavoritesClick}/>)}
    </>
  )
}

export default MovieList