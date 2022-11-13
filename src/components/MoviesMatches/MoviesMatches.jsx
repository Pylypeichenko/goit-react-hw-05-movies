import { Link, useLocation } from 'react-router-dom';

const MoviesMatches = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
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
  );
};

export default MoviesMatches;
