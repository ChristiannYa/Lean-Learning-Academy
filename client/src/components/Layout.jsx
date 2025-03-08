import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import { useEffect } from 'react';

import '../styles/ChessCurriculumCarousel.scss';
import '../styles/Logo.scss';
import '../styles/Nav.scss';
import '../App.css';

const Layout = () => {
  useEffect(() => {
    const header = document.querySelector('.nav');
    if (header) {
      const updateHeight = () => {
        const height = header.offsetHeight;
        document.documentElement.style.setProperty(
          '--header-height',
          `${height}px`
        );
      };

      updateHeight();

      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  return (
    <div className="bg-tertiary min-h-screen">
      <Nav />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
