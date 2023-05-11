import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  const navLinkClassHandler = ({isActive}) => {
    return isActive ? classes.active: '';
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={'/events'} className={navLinkClassHandler}>All Events</NavLink>
          </li>
          <li>
            <NavLink to={'/events/new'} className={navLinkClassHandler}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
