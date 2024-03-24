const MovieIndexItem = ({ movie }) => {
  return (
    <div className="d-flex justify-content-start m-3">
      <img src={movie.Poster} alt={movie.Title} />
      {/* <h2>{movie.Title}</h2> */}
      {/* <p>{movie.Year}</p> */}
    </div>
  )
}

export default MovieIndexItem