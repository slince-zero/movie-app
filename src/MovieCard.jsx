const MovieCard = ({ movieItem }) => {
  return (
    <div className='movie'>
      <div>
        <p>{movieItem.Year}</p>
      </div>
      <div>
        <img src={movieItem.Poster !== 'N/A' ? movieItem.Poster : ''} />
      </div>
      <div>
        <span>{movieItem.Type}</span>
        <h3>{movieItem.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard