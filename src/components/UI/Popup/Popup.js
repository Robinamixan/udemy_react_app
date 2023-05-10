import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';
import PopupBox from './PopupBox';

Popup.propTypes = {
  children: PropTypes.node,
  onBackdropClick: PropTypes.func
};

function Popup(props) {
  const portalElem = document.getElementById('popups');

  return (
      <React.Fragment>
        {ReactDOM.createPortal(
            <Backdrop onClick={props.onBackdropClick}/>
        , portalElem)}
        {ReactDOM.createPortal(
            <PopupBox>{props.children}</PopupBox>
        , portalElem)}
      </React.Fragment>
  );
}

export default Popup;