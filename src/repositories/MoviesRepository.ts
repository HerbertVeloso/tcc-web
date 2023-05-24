import { MovieType } from '../types/Movie';

class MoviesRepository {
  private popularMovies: MovieType[];
  private topRatedMovies: MovieType[];
  private upcomingMovies: MovieType[];

  constructor() {
    this.popularMovies = [];
    this.topRatedMovies = [];
    this.upcomingMovies = [];
  }

  private async getMovieData(endpoint: string): Promise<MovieType[]> {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    return data.results;
  }

  public async getPopularMovies(): Promise<MovieType[]> {
    this.popularMovies = await this.getMovieData('popular');
    return this.popularMovies;
  }

  public async getTopRatedMovies(): Promise<MovieType[]> {
    this.topRatedMovies = await this.getMovieData('top_rated');
    return this.topRatedMovies;
  }

  public async getUpcomingMovies(): Promise<MovieType[]> {
    this.upcomingMovies = await this.getMovieData('upcoming');
    return this.upcomingMovies;
  }
}

export default new MoviesRepository();
