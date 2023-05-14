import React from 'react';
import PropTypes from 'prop-types';

import MyParagraph from './MyParagraph';

DemoOutput.propTypes = {
  showOutput: PropTypes.bool
};

function DemoOutput(props) {
  return (
      <MyParagraph>{props.showOutput ? 'This is new!' : ''}</MyParagraph>
  );
}

export default React.memo(DemoOutput);