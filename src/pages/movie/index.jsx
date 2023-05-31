import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import MoviesRepository from '../../repositories/MoviesRepository';
import { Container, MainVideo, Wrapper } from './style';

export function MoviePage() {
  const [movie, setMovie] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      MoviesRepository.getMovie(id)
        .then(data => setMovie(data));
    }
  }, []);

  return (
    <>
      <Header />
      {!movie ? (
        <p>Carregando...</p>
      ) : (
        <Wrapper>
          {movie.results && (
            <MainVideo
              src={`https://www.youtube.com/embed/${movie.results[0].key}`}
            />
          )}
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          {movie.results && movie.results.length > 1 && (
            <Container>
              <h2>Outros vídeos</h2>
              <div>
                {movie.results.slice(1).map(video => (
                  <iframe
                    key={video.key}
                    src={`https://www.youtube.com/embed/${video.key}`}
                  />
                ))}
              </div>
            </Container>
          )}
        </Wrapper>
      )}

    </>
  );
}
