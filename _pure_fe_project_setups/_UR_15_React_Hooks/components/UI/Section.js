import React from 'react';
import PropTypes from 'prop-types';

import classes from './Section.module.css';

Section.propTypes = {
  children: PropTypes.node,
};

function Section(props) {
  return <section className={classes.section}>{props.children}</section>;
}

export default Section;
