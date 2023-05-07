import React from 'react';
import PropTypes from 'prop-types';

import './ErrorPopup.css';
import Button from '../Button/Button';

ErrorPopup.propTypes = {
  isVisible: PropTypes.bool,
  message: PropTypes.string,
  hidePopup: PropTypes.func
};

function ErrorPopup(props) {
  return (
      <div className={'popup-box'} onClick={props.hidePopup}>
        <div className={'popup-content'}>
          <h1>
            Invalid Input
          </h1>
          <div className={'popup-content__message'}>
            {props.message}
          </div>
          <Button onClick={props.hidePopup}>Okay</Button>
        </div>
      </div>
  );
}

export default ErrorPopup;