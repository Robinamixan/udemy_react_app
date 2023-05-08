import React from 'react';
import PropTypes from 'prop-types';

import classes from './ErrorPopup.module.css';
import Button from '../Button/Button';

ErrorPopup.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func
};

function ErrorPopup(props) {
  return (
      <div>
        <div className={classes.backdrop} onClick={props.onClose}></div>
        <div className={classes['popup-box']}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes['popup-content']}>
            <div className={'popup-content__message'}>
              {props.message}
            </div>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onClose}>Okay</Button>
          </footer>
        </div>
      </div>
  );
}

export default ErrorPopup;