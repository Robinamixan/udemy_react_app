import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import classes from './ErrorPopup.module.css';
import Button from '../Button/Button';

Backdrop.propTypes = {
  onClose: PropTypes.func,
};

function Backdrop(props) {
  return (
      <div className={classes.backdrop} onClick={props.onClick}></div>
  );
}

Overlay.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
};

function Overlay(props) {
  return (
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
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </div>
  );
}

ErrorPopup.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
};

function ErrorPopup(props) {
  return (
      <React.Fragment>
        {ReactDOM.createPortal(
            <Backdrop onClick={props.onClose}/>,
            document.getElementById('backdrop-root'),
        )}
        {ReactDOM.createPortal(
            <Overlay
                onClick={props.onClose}
                title={props.title}
                message={props.message}
            />,
            document.getElementById('popup-root'),
        )}
      </React.Fragment>
  );
}

export default ErrorPopup;