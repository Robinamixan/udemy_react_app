import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './MainNavigation.module.css';

function MainNavigation() {
  const navLinkClassHandler = ({isActive}) => {
    return isActive ? styles.active: '';
  };

  return (
      <header className={styles.header}>
        <nav>
          <ul className={styles.list}>
            <li><NavLink to={'/'} className={navLinkClassHandler} end={true}>Homepage</NavLink></li>
            <li><NavLink to={'/products'} className={navLinkClassHandler}>Products List</NavLink></li>
          </ul>
        </nav>
      </header>
  );
}

export default MainNavigation;