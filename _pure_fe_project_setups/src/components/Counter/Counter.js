import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

function Counter() {
    const counter = useSelector((state) => state.counter);
    const isCounterVisible = useSelector((state) => state.isCounterVisible);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
    };

    const increaseHandler = () => {
        dispatch({ type: 'increase', value: 5 });
    };

    const decrementHandler = () => {
        dispatch({ type: 'decrement' });
    };

    const toggleCounterHandler = () => {
        dispatch({ type: 'toggleCounter' });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {isCounterVisible && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment By 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
}

export default Counter;
