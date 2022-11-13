import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const API_KEY = 'cd7ce70f2d16b0604871e7d56e1ab9d8';
    const BASIC_URL = 'https://api.themoviedb.org/3';
    const creditsUrl = `${BASIC_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;

    const fetchData = () => {
      return fetch(creditsUrl)
        .then(response => response.json())
        .then(data => setReviews(data.results));
    };

    fetchData();
  }, [movieId]);

  return reviews.length === 0 ? (
    <p>There are no reviews yet</p>
  ) : (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <h4>{item.author}</h4>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
