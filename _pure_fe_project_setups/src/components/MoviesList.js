import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';
import classes from './MoviesList.module.css';

MovieList.propTypes = {
  movies: PropTypes.array
};

function MovieList(props) {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
}

export default MovieList;
