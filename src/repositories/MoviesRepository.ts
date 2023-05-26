import { MovieType } from '../types/Movie';

type GetMovieData = {
  results: MovieType[]
} | MovieType;

class MoviesRepository {
  private movie: MovieType | undefined;
  private popularMovies: MovieType[];
  private topRatedMovies: MovieType[];
  private upcomingMovies: MovieType[];

  constructor() {
    this.movie = undefined;
    this.popularMovies = [];
    this.topRatedMovies = [];
    this.upcomingMovies = [];
  }

  private async getMovieData(endpoint: string): Promise<GetMovieData> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    return data;
  }

  public async getPopularMovies(): Promise<MovieType[]> {
    const response = await this.getMovieData('popular');
    this.popularMovies = response.results as MovieType[];
    return this.popularMovies;
  }

  public async getTopRatedMovies(): Promise<MovieType[]> {
    const response = await this.getMovieData('top_rated');
    this.topRatedMovies = response.results as MovieType[];
    return this.topRatedMovies;
  }

  public async getUpcomingMovies(): Promise<MovieType[]> {
    const response = await this.getMovieData('upcoming');
    this.upcomingMovies = response.results as MovieType[];
    return this.upcomingMovies;
  }

  public async getMovie(id: string): Promise<MovieType> {
    const movieData = await this.getMovieData(id) as MovieType;
    const movieVideos = await this.getMovieData(id + '/videos') as MovieType;
    this.movie = {
      ...movieData,
      ...movieVideos,
    };
    return this.movie;
  }
}

export default new MoviesRepository();
