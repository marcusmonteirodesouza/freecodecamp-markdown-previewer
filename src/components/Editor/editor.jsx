import React from 'react';
import PropTypes from 'prop-types';

const Editor = ({ defaultText, onTextChanged }) => {
  return (
    <textarea id="editor" defaultValue={defaultText} onChange={onTextChanged} />
  );
};

Editor.propTypes = {
  defaultText: PropTypes.string,
  onTextChanged: PropTypes.func
};

Editor.defaultProps = {
  defaultText: '',
  onTextChanged: e => {
    const text = e.target.value;
    console.log(text);
  }
};

export default Editor;
