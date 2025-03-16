import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './ScrolltoTop';

import Nav from './Nav';

import '../styles/CurriculumSlider.scss';
import '../styles/Logo.scss';
import '../styles/Nav.scss';
import '../styles/ChessDecorationCarousel.scss';
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
    <>
      <ScrollToTop />
      <div className="bg-tertiary min-h-screen">
        <Nav />
        {/* Add spacing at the top of the main content to avoid 
        content being hidden behind the fixed navbar*/}
        <main style={{ paddingTop: 'var(--header-height)' }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
