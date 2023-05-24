import React from 'react';

import useInput from '../hooks/use-input.js';
import validateEmail from '../utils/validate-email.js';

function BasicForm() {
    const {
        value: firstNameValue,
        isValueValid: isFirstNameValueValid,
        isInputValid: isFirstNameInputValid,
        inputChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: firstNameResetHandler,
    } = useInput((value) => value.trim() !== '');

    const {
        value: lastNameValue,
        isValueValid: isLastNameValueValid,
        isInputValid: isLastNameInputValid,
        inputChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameResetHandler,
    } = useInput((value) => value.trim() !== '');

    const {
        value: emailValue,
        isValueValid: isEmailValueValid,
        isInputValid: isEmailInputValid,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailResetHandler,
    } = useInput((value) => validateEmail(value));

    const isFormValid = isFirstNameValueValid &&
        isLastNameValueValid &&
        isEmailValueValid;

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }

        console.log(firstNameValue);
        console.log(lastNameValue);
        console.log(emailValue);

        firstNameResetHandler();
        lastNameResetHandler();
        emailResetHandler();
    };

    const firstNameClassNames = `form-control ${isFirstNameInputValid
        ? ''
        : 'invalid'}`;

    const lastNameClassNames = `form-control ${isLastNameInputValid
        ? ''
        : 'invalid'}`;

    const emailClassNames = `form-control ${isEmailInputValid
        ? ''
        : 'invalid'}`;

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={firstNameClassNames}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {
                        !isFirstNameInputValid &&
                        <p className="error-text">Please enter first name.</p>
                    }
                </div>
                <div className={lastNameClassNames}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {
                        !isLastNameInputValid &&
                        <p className="error-text">Please enter last name.</p>
                    }
                </div>
            </div>
            <div className={emailClassNames}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {
                    !isEmailInputValid &&
                    <p className="error-text">Please enter valid email.</p>
                }
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid} type="submit">Submit</button>
            </div>
        </form>
    );
}

export default BasicForm;
