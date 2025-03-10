import { NavLink } from 'react-router-dom';

import Logo from '../components/Logo';
import { navLinks } from '../constants/nav-links';

const Nav = () => {
  return (
    <header className="nav shadow-md">
      <Logo />
      <nav className="nav__navigation">
        <ul className="nav__links-container">
          {navLinks.map(({ path, label, children }) => (
            <li
              key={path}
              className={`nav__item ${
                children ? 'nav__item--has-dropdown' : ''
              }`}
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'nav__link nav__link--active'
                    : 'nav__link nav__link--inactive'
                }
              >
                {label}
                {children && <span className="nav__dropdown-arrow"></span>}
              </NavLink>

              {children && (
                <div className="nav__dropdown-menu">
                  <ul className="nav__dropdown-menu-list">
                    {children.map((child) => (
                      <li key={child.path} className="nav__dropdown-menu-item">
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            isActive
                              ? 'nav__dropdown-menu-link nav__dropdown-menu-link--active'
                              : 'nav__dropdown-menu-link nav__dropdown-menu-link--inactive'
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
