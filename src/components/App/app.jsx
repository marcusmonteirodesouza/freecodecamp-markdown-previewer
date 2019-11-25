import React, { useState } from 'react';
import Editor from '../Editor';
import Previewer from '../Previewer';

const App = () => {
  const cr = String.fromCharCode(13);
  const defaultText = `# H1 size${cr}## H2 size${cr}[a link]()${cr}${cr}\`inline code\`${cr}${cr}`;

  const [text, setText] = useState(defaultText);

  const onTextChanged = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Hello, Markdown Previewer!</h1>
      <Editor defaultText={defaultText} onTextChanged={onTextChanged} />
      <div id="preview">
        <Previewer text={text} />
      </div>
    </div>
  );
};

export default App;
