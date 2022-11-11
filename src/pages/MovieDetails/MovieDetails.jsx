import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    const API_KEY = 'cd7ce70f2d16b0604871e7d56e1ab9d8';
    const BASIC_URL = 'https://api.themoviedb.org/3';
    const movieDetailsUrl = `${BASIC_URL}/movie/${movieId}?api_key=${API_KEY}`;

    const fetchData = () => {
      return fetch(movieDetailsUrl)
        .then(response => response.json())
        .then(data => setMovie(data));
    };

    fetchData();
  }, [movieId]);

  console.log(movie);

  if (movie) {
    return (
      <>
        <img
          src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
          alt={movie.original_title || movie.original_name}
        />
        <h1>
          {movie.original_title || movie.original_name} (
          {movie.release_date.slice(0, 4)})
        </h1>
        <p>User score: {movie.vote_average.toFixed(1) * 10}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
      </>
    );
  }
};

export default MovieDetails;
