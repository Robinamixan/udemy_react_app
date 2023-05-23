import React from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter.js';

const COUNT_STEP = 1;

function ForwardCounter() {
    const counter = useCounter(COUNT_STEP);

    return <Card>{counter}</Card>;
}

export default ForwardCounter;
