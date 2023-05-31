class MoviesRepository {
  #movie;
  #popularMovies;
  #topRatedMovies;
  #upcomingMovies;

  constructor() {
    this.#movie = undefined;
    this.#popularMovies = [];
    this.#topRatedMovies = [];
    this.#upcomingMovies = [];
  }

  async #getMovieData(endpoint) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    return data;
  }

  async getPopularMovies() {
    const response = await this.#getMovieData('popular');
    this.#popularMovies = response.results;
    return this.#popularMovies;
  }

  async getTopRatedMovies() {
    const response = await this.#getMovieData('top_rated');
    this.#topRatedMovies = response.results;
    return this.#topRatedMovies;
  }

  async getUpcomingMovies() {
    const response = await this.#getMovieData('upcoming');
    this.#upcomingMovies = response.results;
    return this.#upcomingMovies;
  }

  async getMovie(id) {
    const movieData = await this.#getMovieData(id);
    const movieVideos = await this.#getMovieData(id + '/videos');
    this.#movie = {
      ...movieData,
      ...movieVideos,
    };
    return this.#movie;
  }
}

export default new MoviesRepository();
