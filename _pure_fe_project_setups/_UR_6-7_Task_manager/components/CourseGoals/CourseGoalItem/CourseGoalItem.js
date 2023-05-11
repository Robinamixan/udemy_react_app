import React from 'react';
import PropTypes from 'prop-types';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

CourseGoalItem.propTypes = {
  onDelete: PropTypes.func,
  children: PropTypes.node,
  id: PropTypes.any
};

export default CourseGoalItem;
