import React from 'react';
import PropTypes from 'prop-types';

import styles from './Popup.module.css';

Backdrop.propTypes = {
    onClick: PropTypes.func,
};

function Backdrop(props) {
    return (
        <div className={styles.backdrop} onClick={props.onClick}></div>
    );
}

export default Backdrop;