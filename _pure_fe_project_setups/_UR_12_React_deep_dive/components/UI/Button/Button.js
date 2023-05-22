import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// memo does not work because props.onClick function is recreated every time of parent rerender
export default React.memo(Button);
