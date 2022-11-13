import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesMatches from '../../components/MoviesMatches/MoviesMatches';

const Movies = () => {
  //   const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery !== '') {
      try {
        const API_KEY = 'cd7ce70f2d16b0604871e7d56e1ab9d8';
        const BASIC_URL = 'https://api.themoviedb.org/3';
        const searchMoviesUrl = `${BASIC_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

        const fetchData = () => {
          return fetch(searchMoviesUrl)
            .then(response => {
              if (response.ok) {
                return response.json();
              }
            })
            .then(data => setMovies(data.results));
        };

        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    console.log(nextParams);
  };

  //   const handleChange = e => {
  //       setSearchQuery(e.target.value.toLowerCase().trim());
  //   };

  const onFormSubmit = e => {
    e.preventDefault();
    updateQueryString(e.currentTarget.elements.input.value);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="search">Find some movie you would like to watch</label>
        <input
          type="text"
          id="search"
          name="input"
          //   value={searchQuery}
          //   onChange={e => updateQueryString(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <MoviesMatches movies={movies} searchQuery={searchQuery} />
      )}
      {/* {movies.length === 0 && (
        <p>We haven't found anything. Try another movie title</p>
      )} */}
    </>
  );
};

export default Movies;
