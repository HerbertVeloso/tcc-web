import { MovieType } from '../types/Movie';

export async function getApiData(endpoint: string): Promise<MovieType[]> {
  const response = await fetch(`https://api.themoviedb.org/3${endpoint}?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`);
  const data = await response.json();
  return data.results;
}
