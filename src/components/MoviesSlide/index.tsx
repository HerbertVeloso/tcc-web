import { MovieType } from '../../types/Movie';
import { Slider } from '../Slider';
import { SubTitle } from '../SubTitle';

interface MoviesSlideProps {
  label: string;
  movies: MovieType[];
}

export function MoviesSlide({ label, movies }: MoviesSlideProps) {
  return (
    <section>
      <SubTitle>{label}</SubTitle>
      {movies.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <Slider
          movies={movies}
        />
      )}
    </section>
  );
}
