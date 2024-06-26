const MovieIndexItem = ({ movie, handleFavoritesClick, FavoriteComponent }) => {
  return (
    <div className="image-container d-flex justify-content-start m-3">
      <img src={movie.Poster} alt={movie.Title} />
      <div onClick={() => handleFavoritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
        <FavoriteComponent />
      </div>
    </div>
  )
}

export default MovieIndexItem