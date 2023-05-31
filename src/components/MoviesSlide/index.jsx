import { Slider } from '../Slider';
import { SubTitle } from '../SubTitle';

export function MoviesSlide({ label, movies }) {
  return (
    <section>
      <SubTitle>{label}</SubTitle>
      {movies?.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <Slider
          movies={movies}
        />
      )}
    </section>
  );
}
