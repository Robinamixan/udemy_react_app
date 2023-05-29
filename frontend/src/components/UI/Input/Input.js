import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = React.forwardRef(function(props, ref) {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

Input.displayName = 'Input';
Input.propTypes = {
    label: PropTypes.string,
    input: PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string,
    }),
};

export default Input;