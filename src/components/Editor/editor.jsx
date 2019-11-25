import React from 'react';
import PropTypes from 'prop-types';

const Editor = ({ onTextChanged }) => {
  return <textarea id="editor" onChange={onTextChanged} />;
};

Editor.propTypes = {
  onTextChanged: PropTypes.func
};

Editor.defaultProps = {
  onTextChanged: e => {
    const text = e.target.value;
    console.log(text);
  }
};

export default Editor;
