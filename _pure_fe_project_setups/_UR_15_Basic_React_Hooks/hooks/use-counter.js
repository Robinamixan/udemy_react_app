import { useEffect, useState } from 'react';

const INITIAL_COUNT = 0;
const COUNT_STEP = 1;
const COUNT_STEP_TIMER = 1000;

function useCounter(step = COUNT_STEP) {
    const [counter, setCounter] = useState(INITIAL_COUNT);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + step);
        }, COUNT_STEP_TIMER);

        return () => clearInterval(interval);
    }, [step]);

    return counter;
}

export default useCounter;