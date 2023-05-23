import React from 'react';

import classes from './TaskItem.module.css';
import PropTypes from 'prop-types';

TaskItem.propTypes = {
  children: PropTypes.node,
};

function TaskItem(props) {
  return (
      <li className={classes.task}>{props.children}</li>
  );
}

export default TaskItem;