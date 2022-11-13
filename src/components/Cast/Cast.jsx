import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PhotoReplacer from '../PhotoReplacer/PhotoReplacer';
import { movieCredits } from '../../service-API/movies-API';

import { ActorList, ActorCard } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    try {
      movieCredits(movieId).then(data => setCast(data.cast));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (cast) {
    return (
      <ActorList>
        {cast.map(actor => {
          return (
            <ActorCard key={actor.id}>
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
            </ActorCard>
          );
        })}
      </ActorList>
    );
  }
};

export default Cast;
