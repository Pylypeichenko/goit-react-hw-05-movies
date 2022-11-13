import { Link, useLocation } from 'react-router-dom';

import { MovieList, MovieCard } from './MoviesMatches.styled';

const MoviesMatches = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(movie => {
        return (
          <MovieCard key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                src={'https://image.tmdb.org/t/p/w200' + movie.poster_path}
                alt={movie.original_title}
                loading="lazy"
              />
              <p>{movie.original_title || movie.original_name}</p>
            </Link>
          </MovieCard>
        );
      })}
    </MovieList>
  );
};

export default MoviesMatches;
