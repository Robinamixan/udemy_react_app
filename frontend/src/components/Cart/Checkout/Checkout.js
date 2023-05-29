import React from 'react';

import styles from './Checkout.module.css';
import PropTypes from 'prop-types';

function isEmpty(value) {
    return value.trim() === '';
}

function isValidPostalCode(value) {
    return value.trim().length === 5;
}

Checkout.propTypes = {
    onCartHide: PropTypes.func,
    onConfirm: PropTypes.func,
};

function Checkout(props) {
    const nameRef = React.useRef();
    const streetRef = React.useRef();
    const postalRef = React.useRef();
    const cityRef = React.useRef();

    const [formInputValidity, setFormInputValidity] = React.useState({
        name: null,
        street: null,
        postal: null,
        city: null,
    });

    const confirmHandler = (event) => {
        event.preventDefault();

        const nameValue = nameRef.current.value;
        const streetValue = streetRef.current.value;
        const postalValue = postalRef.current.value;
        const cityValue = cityRef.current.value;

        const isValidName = !isEmpty(nameValue);
        const isValidStreet = !isEmpty(streetValue);
        const isValidPostal = isValidPostalCode(postalValue);
        const isValidCity = !isEmpty(cityValue);

        setFormInputValidity({
            name: isValidName,
            street: isValidStreet,
            postal: isValidPostal,
            city: isValidCity,
        });

        const isValidForm = isValidName && isValidStreet && isValidPostal &&
            isValidCity;

        if (!isValidForm) {
            return;
        }

        props.onConfirm({
            name: nameValue,
            street: streetValue,
            postal: postalValue,
            city: cityValue,
        });
    };

    const getControlClasses = (fieldName) => {
        return `${styles.control} ${formInputValidity[fieldName] === false ? styles.invalid : ''}`;
    };

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={getControlClasses('name')}>
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" ref={nameRef} />
                {formInputValidity.name === false && <p>Please enter valid name</p>}
            </div>
            <div className={getControlClasses('street')}>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" ref={streetRef} />
                {formInputValidity.street === false && <p>Please enter valid street</p>}
            </div>
            <div className={getControlClasses('postal')}>
                <label htmlFor="postal">Postal Code</label>
                <input id="postal" type="text" ref={postalRef} />
                {formInputValidity.postal === false && <p>Please enter valid postal code</p>}
            </div>
            <div className={getControlClasses('city')}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" ref={cityRef} />
                {formInputValidity.city === false && <p>Please enter valid city</p>}
            </div>
            <div className={styles.actions}>
                <button onClick={props.onCartHide}>Close</button>
                <button className={styles.submit} type="submit">Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;