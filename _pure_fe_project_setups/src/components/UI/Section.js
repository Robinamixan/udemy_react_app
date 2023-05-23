import React from 'react';

import classes from './Section.module.css';
import PropTypes from 'prop-types';

Section.propTypes = {
  children: PropTypes.node,
};

function Section(props) {
  return <section className={classes.section}>{props.children}</section>;
}

export default Section;
