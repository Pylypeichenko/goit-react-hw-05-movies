const API_KEY = 'cd7ce70f2d16b0604871e7d56e1ab9d8';
const BASIC_URL = 'https://api.themoviedb.org/3';

const fetchData = url => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

export const trendingMovies = () => {
  const trendingUrl = `${BASIC_URL}/trending/all/day?api_key=${API_KEY}`;

  return fetchData(trendingUrl);
};

export const searchMovies = searchQuery => {
  const searchMoviesUrl = `${BASIC_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

  return fetchData(searchMoviesUrl);
};

export const choosenMovieInfo = movieId => {
  const movieDetailsUrl = `${BASIC_URL}/movie/${movieId}?api_key=${API_KEY}`;

  return fetchData(movieDetailsUrl);
};

export const movieCredits = movieId => {
  const creditsUrl = `${BASIC_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

  return fetchData(creditsUrl);
};

export const movieReviews = movieId => {
  const reviewsUrl = `${BASIC_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;

  return fetchData(reviewsUrl);
};
