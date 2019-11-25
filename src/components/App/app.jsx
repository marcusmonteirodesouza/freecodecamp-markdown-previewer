import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Editor from '../Editor';
import Previewer from '../Previewer';

import './app.css'; // eslint-disable-line import/no-unassigned-import

const App = () => {
  const cr = `${String.fromCharCode(13)}${String.fromCharCode(13)}`;
  const defaultText = `# H1 size${cr}## H2 size${cr}[a link]()${cr}\`inline code\`${cr}\`\`\`js${cr}const codeblock = true${cr}\`\`\`${cr}1. a list item${cr}> a blockquote${cr}![an image](https://picsum.photos/200)${cr}**bolded text**`;

  const [text, setText] = useState(defaultText);

  const onTextChanged = e => {
    setText(e.target.value);
  };

  return (
    <div className="grid grid-template grid-template-ns gap2">
      <h1 className="header tc">
        <a
          className="mr2"
          href="https://github.com/marcusmonteirodesouza/freecodecamp-markdown-previewer"
          title="See source code on Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        Markdown Previewer
      </h1>
      <Editor
        className="editor"
        defaultText={defaultText}
        onTextChanged={onTextChanged}
      />
      <div className="preview ba">
        <Previewer text={text} />
      </div>
    </div>
  );
};

export default App;
