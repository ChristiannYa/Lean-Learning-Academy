import { NavLink } from 'react-router-dom';

import Logo from '../components/Logo';
import { navLinks } from '../constants/nav-links';

const Nav = () => {
  return (
    <header className="nav">
      <Logo />
      <nav>
        <ul className="nav__links-container">
          {navLinks.map(({ path, label, children }) => (
            <li key={path} className={children ? 'has-dropdown' : ''}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'nav__links-container--active'
                    : 'nav__links-container--inactive'
                }
              >
                {label}
                {children && <span className="dropdown-arrow"></span>}
              </NavLink>

              {children && (
                <div className="dropdown-menu">
                  <ul className="dropdown-menu__list">
                    {children.map((child) => (
                      <li key={child.path} className="dropdown-menu__item">
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            isActive
                              ? 'dropdown-menu__link dropdown-menu__link--active'
                              : 'dropdown-menu__link dropdown-menu__link--inactive'
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
