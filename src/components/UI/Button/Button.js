import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

function Button(props) {
  return (
    <button
        type={props.type || 'button'}
        className={styles.button}
        onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
