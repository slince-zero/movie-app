import './App.css'
import { useEffect, useState } from 'react'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=eefcce92'

function App() {
  const [movies, setMovies] = useState([])
  const [searchItem, setSearchItem] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('spiderman') // 这个是给默认值
  }, [])
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='serachIcon'
          onClick={() => searchMovies(searchItem)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movieItem={movie}
            />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
