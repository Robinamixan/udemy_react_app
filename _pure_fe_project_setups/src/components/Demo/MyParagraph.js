import React from 'react';
import PropTypes from 'prop-types';

MyParagraph.propTypes = {
  children: PropTypes.node
};

function MyParagraph(props) {
  return (
      <p>{props.children}</p>
  );
}

export default MyParagraph;