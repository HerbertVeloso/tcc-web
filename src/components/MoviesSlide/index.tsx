import { useQuery } from '@tanstack/react-query';
import { getApiData } from '../../utils/getData';
import { Slider } from '../Slider';
import { SubTitle } from '../SubTitle';

interface MoviesSlideProps {
  label: string;
  query: {
    key: string,
    endpoint: string,
  }
}

export function MoviesSlide({ label, query }: MoviesSlideProps) {
  const { data: movies, isLoading, isError } = useQuery({
    queryKey: [query.key],
    queryFn: () => getApiData(query.endpoint),
  });

  return (
    <section>
      {isLoading && (
        <p>Carregando...</p>
      )}
      {!isLoading && !isError && (
        <>
          <SubTitle>{label}</SubTitle>
          <Slider
            movies={movies}
          />
        </>
      )}
    </section>
  );
}
