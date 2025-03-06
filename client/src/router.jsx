import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import NotFoundPage from './pages/main/NotFoundPage.jsx';

// Main pages
import AboutUsPage from './pages/main/AboutUsPage.jsx';
import CoursesPage from './pages/main/CoursesPage.jsx';
import ShopPage from './pages/main/ShopPage.jsx';
import LandingPage from './pages/main/HomePage.jsx';
import LoginPage from './pages/main/LoginPage.jsx';

// Course pages
import ChessCoursePage from './pages/courses/ChessCoursePage.jsx';
import EnglishCoursePage from './pages/courses/EnglishCoursePage.jsx';
import JapaneseCoursePage from './pages/courses/JapaneseCoursePage.jsx';
import PhotographyCoursePage from './pages/courses/PhotographyCoursePage.jsx';

const mainRoutes = [
  {
    index: true,
    element: <LandingPage />,
  },
  {
    path: 'about-us',
    element: <AboutUsPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'shop',
    element: <ShopPage />,
  },
];

const courseRoutes = [
  {
    path: 'courses',
    element: <CoursesPage />,
  },
  {
    path: 'courses/chess',
    element: <ChessCoursePage />,
  },
  {
    path: 'courses/english',
    element: <EnglishCoursePage />,
  },
  {
    path: 'courses/japanese',
    element: <JapaneseCoursePage />,
  },
  {
    path: 'courses/photography',
    element: <PhotographyCoursePage />,
  },
];

// Combine all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      ...mainRoutes,
      ...courseRoutes,
    ],
  },
]);

export default router;
