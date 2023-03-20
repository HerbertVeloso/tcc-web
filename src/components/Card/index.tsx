import { forwardRef } from 'react';
import { MovieType } from '../../types/Movie';
import { Wrapper } from './styles';

interface CardProps {
  movie: MovieType;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ movie }: CardProps, ref) => {
  return (
    <Wrapper
      ref={ref}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      />
      <div>
        <strong>{movie.title}</strong>
      </div>
    </Wrapper>
  );
});


Card.displayName = 'Card';
