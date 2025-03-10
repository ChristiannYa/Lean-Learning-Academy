import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../components/Logo';
import { navLinks } from '../constants/nav-links';

const Nav = () => {
  const location = useLocation();

  return (
    <header className="nav shadow-md">
      <Logo />
      <nav className="nav__navigation">
        <ul className="nav__links-container">
          {navLinks.map(({ path, label, children }) => {
            const isChildActive =
              // If a links has children, check if any
              // of the children are active
              children &&
              children.some((child) =>
                location.pathname.startsWith(child.path)
              );

            return (
              <li
                key={path}
                className={`nav__item ${
                  children ? 'nav__item--has-dropdown' : ''
                }`}
              >
                {children ? (
                  <span
                    className={`nav__link cursor-pointer ${
                      isChildActive
                        ? 'nav__link--active'
                        : 'nav__link--inactive'
                    }`}
                  >
                    {label}
                    {children && <span className="nav__dropdown-arrow"></span>}
                  </span>
                ) : (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? 'nav__link nav__link--active'
                        : 'nav__link nav__link--inactive'
                    }
                  >
                    {label}
                  </NavLink>
                )}

                {children && (
                  <div className="nav__dropdown-menu">
                    <ul className="nav__dropdown-menu-list">
                      {children.map((child) => (
                        <li
                          key={child.path}
                          className="nav__dropdown-menu-item"
                        >
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
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
