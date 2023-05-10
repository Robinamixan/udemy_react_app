import React from 'react';
import PropTypes from 'prop-types';

import CartIcon from '../../Cart/CartIcon/CartIcon';
import styles from './HeaderCartButton.module.css';

HeaderCartButton.propTypes = {

};

function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;