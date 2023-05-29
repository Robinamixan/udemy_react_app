import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup';

function MainNavigation() {
  const navLinkClassHandler = ({isActive}) => {
    return isActive ? classes.active: '';
  };

  return (
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                  to="/"
                  className={navLinkClassHandler}
                  end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="/events"
                  className={navLinkClassHandler}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                  to="/newsletter"
                  className={navLinkClassHandler}
              >
                Newsletter
              </NavLink>
            </li>
          </ul>
        </nav>
        <NewsletterSignup />
      </header>
  );
}

export default MainNavigation;