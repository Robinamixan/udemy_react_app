import React from 'react';

import classes from './Card.module.css';
import PropTypes from 'prop-types';

Card.propTypes = {
    children: PropTypes.node,
};

function Card(props) {
    return <div className={classes.card}>{props.children}</div>;
}

export default Card;
