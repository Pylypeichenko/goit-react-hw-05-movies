import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { movieReviews } from '../../service-API/movies-API';

import { Note, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      movieReviews(movieId).then(data => setReviews(data.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return reviews.length === 0 ? (
    <Note>There are no reviews yet</Note>
  ) : (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <h4>{item.author}</h4>
            <Text>{item.content}</Text>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
