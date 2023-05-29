import React from 'react';
import PropTypes from 'prop-types';

import styles from './Popup.module.css';

PopupBox.propTypes = {
    children: PropTypes.node,
};

function PopupBox(props) {
    return (
        <div className={styles.popup}>
            {props.children}
        </div>
    );
}

export default PopupBox;