import React from 'react';
import PropTypes from 'prop-types';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http.js';

NewTask.propTypes = {
    onAddTask: PropTypes.func,
};

function NewTask(props) {
    const transformData = (data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
    };

    const { sendRequest, isLoading, error } = useHttp();

    const enterTaskHandler = async (taskText) => {
        sendRequest(
            {
                url: 'https://react-http-6b4a6.firebaseio.com/tasks.json',
                method: 'POST',
                body: { text: taskText },
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            transformData.bind(null, taskText),
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
}

export default NewTask;
