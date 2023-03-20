import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from './pages/About';
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
]);
