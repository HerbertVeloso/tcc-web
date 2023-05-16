import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from './pages/About';
import { FreeWayPage } from './pages/freeway';
import { GamesPage } from './pages/games';
import { HomePage } from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
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
