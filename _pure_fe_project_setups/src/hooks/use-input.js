import { useReducer } from 'react';

const initialState = {
    value: '',
    touched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {
            value: action.value,
            touched: state.touched,
        };
    }

    if (action.type === 'BLUR') {
        return {
            value: state.value,
            touched: true,
        };
    }

    if (action.type === 'RESET') {
        return initialState;
    }

    return state;
};

function useInput(validateValue) {
    const [state, dispatch] = useReducer(inputStateReducer, initialState);

    const isValueValid = validateValue(state.value);
    const isInputValid = isValueValid || !state.touched;

    const inputChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    };

    const inputBlurHandler = () => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: state.value,
        isValueValid,
        isInputValid,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    };
}

export default useInput;