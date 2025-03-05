import { NavLink } from 'react-router-dom';

import Logo from '../components/Logo';
import { navLinks } from '../constants/nav-links';

const Nav = () => {
  return (
    <header className="nav">
      <Logo />
      <nav>
        <ul className="nav__links-container">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'nav__links-container__active'
                    : 'nav__links-container__inactive'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
