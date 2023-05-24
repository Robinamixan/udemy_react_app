import { useState } from 'react';

function useInput(validateValue) {
    const [value, setValue] = useState('');
    const [isInputTouched, setIsInputTouched] = useState(false);

    const isValueValid = validateValue(value);
    const isInputValid = isValueValid || !isInputTouched;

    const inputChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setIsInputTouched(true);
    };

    const reset = () => {
        setValue('');
        setIsInputTouched(false);
    };

    return {
        value,
        isValueValid,
        isInputValid,
        inputChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;