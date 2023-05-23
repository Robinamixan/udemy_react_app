import React from 'react';

import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';
import PropTypes from 'prop-types';

Tasks.propTypes = {
  items: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  onFetch: PropTypes.func,
};

function Tasks(props) {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
}

export default Tasks;
