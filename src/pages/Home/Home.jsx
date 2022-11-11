import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = 'cd7ce70f2d16b0604871e7d56e1ab9d8';
    const BASIC_URL = 'https://api.themoviedb.org/3';
    const trendingUrl = `${BASIC_URL}/trending/all/day?api_key=${API_KEY}`;

    const fetchData = () => {
      return fetch(trendingUrl)
        .then(response => response.json())
        .then(data => setMovies(data.results));
    };

    fetchData();
  }, []);

  if (movies !== []) {
    return (
      <>
        <h1>Movies in trend today</h1>
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                  <img
                    src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
                    alt={movie.original_title}
                  />
                  <p>{movie.original_title || movie.original_name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Home;
