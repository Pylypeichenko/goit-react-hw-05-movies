import { useEffect, useState, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from '../../service-API/movies-API';

import { Container } from '../../components/common.styled/common.styled';
import { Form } from './Movies.styled';

const MoviesMatches = lazy(() =>
  import('../../components/MoviesMatches/MoviesMatches')
);

const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery !== '') {
      try {
        searchMovies(searchQuery).then(data => setMovies(data.results));
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    updateQueryString(e.currentTarget.elements.input.value);
  };

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <label htmlFor="search">Find some movie you would like to watch</label>
        <input type="text" id="search" name="input" />
        <button type="submit">Search</button>
      </Form>
      {movies && movies.length > 0 && <MoviesMatches movies={movies} />}
      {movies && movies.length === 0 && (
        <p>We haven't found anything. Try another movie title</p>
      )}
    </Container>
  );
};

export default Movies;
