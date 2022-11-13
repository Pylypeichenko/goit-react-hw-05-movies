import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PhotoReplacer from '../PhotoReplacer/PhotoReplacer';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const API_KEY = 'cd7ce70f2d16b0604871e7d56e1ab9d8';
    const BASIC_URL = 'https://api.themoviedb.org/3';
    const creditsUrl = `${BASIC_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

    const fetchData = () => {
      return fetch(creditsUrl)
        .then(response => response.json())
        .then(data => setCast(data.cast));
    };

    fetchData();
  }, [movieId]);

  if (cast) {
    return (
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={'https://image.tmdb.org/t/p/w200' + actor.profile_path}
                  alt={actor.original_name}
                />
              ) : (
                <PhotoReplacer />
              )}
              <h3>{actor.original_name}</h3>
              <p>Character: {actor.character || 'unknown'}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default Cast;
