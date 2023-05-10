import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';
import PopupBox from './PopupBox';

Popup.propTypes = {
  children: PropTypes.node
};

function Popup(props) {
  const portalElem = document.getElementById('popups');

  return (
      <React.Fragment>
        {ReactDOM.createPortal(
            <Backdrop/>
        , portalElem)}
        {ReactDOM.createPortal(
            <PopupBox>{props.children}</PopupBox>
        , portalElem)}
      </React.Fragment>
  );
}

export default Popup;