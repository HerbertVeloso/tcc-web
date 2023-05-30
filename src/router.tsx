import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from './pages/about';
import { GamesPage } from './pages/games';
import { HomePage } from './pages/home';
import { MoviePage } from './pages/movie';
import { SnakePage } from './pages/snake';

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
  // {
  //   path: '/games/freeway',
  //   element: <FreeWayPage />
  // },
  {
    path: '/games/snake',
    element: <SnakePage />
  },
  // {
  //   path: '/games/breakout',
  //   element: <BreakOutPage />
  // },
]);
