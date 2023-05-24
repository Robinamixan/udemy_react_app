import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http.js';

function App() {
    const [tasks, setTasks] = useState([]);

    const transformTasks = (data) => {
        const loadedTasks = [];

        for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setTasks(loadedTasks);
    };
    const { sendRequest: fetchTasks, isLoading, error } = useHttp();

    useEffect(() => {
        fetchTasks(
            { url: 'https://react-http-6b4a6.firebaseio.com/tasks.json' },
            transformTasks,
        );
    }, []);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;