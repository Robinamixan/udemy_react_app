import { createStore } from 'redux';

const initialState = {
    counter: 0,
    isCounterVisible: true,
};

const stateReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }

    if (action.type === 'increase') {
        return {
            ...state,
            counter: state.counter + action.value,
        };
    }

    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }

    if (action.type === 'toggleCounter') {
        return {
            ...state,
            isCounterVisible: !state.isCounterVisible,
        };
    }

    return state;
};

const store = createStore(stateReducer);

export default store;
