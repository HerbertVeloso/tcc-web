import { Header } from '../../components/Header';
import { MoviesSlide } from '../../components/MoviesSlide';

export function HomePage() {
  return (
    <>
      <>
        <Header />
        <MoviesSlide
          label='Filmes populares'
          query={{
            key: 'popular',
            endpoint: '/movie/popular'
          }}
        />

        <MoviesSlide
          label='Filmes bem avaliados'
          query={{
            key: 'top_rated',
            endpoint: '/movie/top_rated'
          }}
        />

        <MoviesSlide
          label='Filmes em breve'
          query={{
            key: 'upcoming',
            endpoint: '/movie/upcoming'
          }}
        />

      </>
    </>
  );
}
