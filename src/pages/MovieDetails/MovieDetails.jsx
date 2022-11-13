import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';

import { choosenMovieInfo } from '../../service-API/movies-API';

import { Container } from 'components/common.styled/common.styled';
import {
  MovieMainInfo,
  MainInfoWrapper,
  Text,
  MovieAddInfo,
  AddInfoList,
  LinkBackwards,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    try {
      choosenMovieInfo(movieId).then(data => setMovie(data));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (movie) {
    return (
      <Container>
        <LinkBackwards to={backLinkHref}>Back to movies</LinkBackwards>
        <MovieMainInfo>
          <img
            src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
            alt={movie.original_title || movie.original_name}
          />
          <MainInfoWrapper>
            <h1>
              {movie.original_title || movie.original_name} (
              {movie.release_date.slice(0, 4)})
            </h1>
            <Text>User score: {movie.vote_average.toFixed(1) * 10}%</Text>
            <h2>Overview</h2>
            <Text>{movie.overview}</Text>
            <h2>Genres</h2>
            <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
          </MainInfoWrapper>
        </MovieMainInfo>
        <MovieAddInfo>
          <h3>Additional information</h3>
          <AddInfoList>
            <li>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </li>
          </AddInfoList>
        </MovieAddInfo>
        <Suspense fallback={<div>Loading info for you ...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    );
  }

  return (
    <p>
      We couldn't found this movie information. Please, return BACK and try
      another one.
    </p>
  );
};

export default MovieDetails;
