import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ChessPage from './pages/ChessPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ProfilesPage from './pages/ProfilesPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './components/Layout.jsx';
import LandingPage from './pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
      {
        path: 'chess',
        element: <ChessPage />,
      },
      {
        path: 'courses',
        element: <CoursesPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'profiles',
        element: <ProfilesPage />,
        children: [
          {
            path: ':profileId',
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
