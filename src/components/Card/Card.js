import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

Card.propTypes = {
  className: PropTypes.string,
  children: React.ReactNode,
};

function Card(props) {
  const classes = 'card ' + props.className;

  return(
      <div className={classes}>{props.children}</div>
  );
}

export default Card;