import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.css';
import mealsImage from '../../../assets/images/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

Header.propTypes = {
  onCartShow: PropTypes.func
};

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onCartShow}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt={'meals-background'}/>
      </div>
    </React.Fragment>
  );
}

export default Header;