import { useEffect, useState } from 'react';

import { trendingMovies } from '../../service-API/movies-API';
import MoviesMatches from '../../components/MoviesMatches/MoviesMatches';

import { Container } from '../../components/common.styled/common.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      trendingMovies().then(data => setMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (movies !== []) {
    return (
      <Container>
        <h1>Movies in trend today</h1>
        {movies.length > 0 && <MoviesMatches movies={movies} />}
      </Container>
    );
  }
};

export default Home;
