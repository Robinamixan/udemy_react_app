import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

Card.propTypes = {
  children: PropTypes.node
};

function Card(props) {
  return (
      <div className={styles.card}>
        {props.children}
      </div>
  );
}

export default Card;