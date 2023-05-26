import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { MoviesSlide } from '../../components/MoviesSlide';
import MoviesRepository from '../../repositories/MoviesRepository';
import { MovieType } from '../../types/Movie';

type MoviesData = {
  popularMovies: MovieType[];
  topRatedMovies: MovieType[];
  upcomingMovies: MovieType[];
}

export function HomePage() {
  const [movies, setMovies] = useState<MoviesData>({
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
  });

  useEffect(() => {
    Promise.all([
      MoviesRepository.getPopularMovies(),
      MoviesRepository.getTopRatedMovies(),
      MoviesRepository.getUpcomingMovies(),
    ]).then((data) => {
      setMovies({
        popularMovies: data[0],
        topRatedMovies: data[1],
        upcomingMovies: data[2],
      });
    });
  }, []);

  return (
    <>
      <Header />
      <MoviesSlide
        label='Filmes populares'
        movies={movies.popularMovies}
      />
      <MoviesSlide
        label='Filmes melhor avaliados'
        movies={movies.topRatedMovies}
      />
      <MoviesSlide
        label='Filmes que estão por vir'
        movies={movies.upcomingMovies}
      />
    </>
  );
}
