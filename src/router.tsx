import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from './pages/about';
import { FreeWayPage } from './pages/freeway';
import { GamesPage } from './pages/games';
import { HomePage } from './pages/home';
import { MoviePage } from './pages/movie';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/movie/:id',
    element: <MoviePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/games',
    element: <GamesPage />
  },
  {
    path: '/freeway',
    element: <FreeWayPage />
  },
]);
