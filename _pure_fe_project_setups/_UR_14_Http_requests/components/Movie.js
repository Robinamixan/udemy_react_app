import React from 'react';

import classes from './Movie.module.css';
import PropTypes from 'prop-types';

Movie.propTypes = {
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    openingText: PropTypes.string,
};

function Movie(props) {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
}

export default Movie;
