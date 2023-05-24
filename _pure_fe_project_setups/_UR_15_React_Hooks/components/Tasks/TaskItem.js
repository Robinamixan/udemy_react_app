import React from 'react';
import PropTypes from 'prop-types';

import classes from './TaskItem.module.css';

TaskItem.propTypes = {
  children: PropTypes.node,
};

function TaskItem(props) {
  return (
      <li className={classes.task}>{props.children}</li>
  );
}

export default TaskItem;