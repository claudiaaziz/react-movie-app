import AddFavorites from "./AddFavorites";

const MovieIndexItem = ({ movie }) => {
  return (
    <div className="image-container d-flex justify-content-start m-3">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="overlay d-flex align-items-center justify-content-center">
        <AddFavorites />
      </div>
    </div>
  )
}

export default MovieIndexItem