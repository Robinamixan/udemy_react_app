import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import classes from './TaskForm.module.css';

TaskForm.propTypes = {
    loading: PropTypes.bool,
    onEnterTask: PropTypes.func,
};

function TaskForm(props) {
    const taskInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredValue = taskInputRef.current.value;

        if (enteredValue.trim().length) {
            props.onEnterTask(enteredValue);
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input type="text" ref={taskInputRef} />
            <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
        </form>
    );
}

export default TaskForm;
