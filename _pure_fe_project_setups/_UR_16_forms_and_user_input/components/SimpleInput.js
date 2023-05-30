import React from 'react';

import validateEmail from '../utils/validate-email.js';
import useInput from '../hooks/use-input.js';

function SimpleInput() {
    const {
        value: nameValue,
        isValueValid: isNameValueValid,
        isInputValid: isNameInputValid,
        inputChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: nameInputReset,
    } = useInput((value) => value.trim() !== '');

    const {
        value: emailValue,
        isValueValid: isEmailValueValid,
        isInputValid: isEmailInputValid,
        inputChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: emailInputReset,
    } = useInput((value) => validateEmail(value));

    const isFormValid = isNameValueValid && isEmailValueValid;

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }

        console.log(nameValue);
        console.log(emailValue);

        nameInputReset();
        emailInputReset();
    };

    const nameInputClasses = `form-control ${!isNameInputValid
        ? 'invalid'
        : ''}`;
    const emailInputClasses = `form-control ${!isEmailInputValid
        ? 'invalid'
        : ''}`;

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={nameValue}
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                />
                {
                    !isNameInputValid &&
                    <p className="error-text">Name must not be empty</p>
                }
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="text"
                    id="email"
                    value={emailValue}
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                />
                {
                    !isEmailInputValid &&
                    <p className="error-text">Email is not valid</p>
                }
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid} type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SimpleInput;
