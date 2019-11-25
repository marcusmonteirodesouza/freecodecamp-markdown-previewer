import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';

const Previewer = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: marked(text) }} />; // eslint-disable-line react/no-danger
};

Previewer.propTypes = {
  text: PropTypes.string
};

Previewer.defaultProps = {
  text: ''
};

export default Previewer;
