import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '.';

describe('App', () => {
  afterEach(cleanup);

  test('2 I can see an element with a corresponding id="preview"', () => {
    const { container } = render(<App />);
    const preview = container.querySelector('#preview');
    expect(preview).toBeVisible();
  });

  it('3 When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.', () => {
    const { container } = render(<App />);
    const editor = container.querySelector('#editor');
    const preview = container.querySelector('#preview');

    const text = 'Hello, World!';
    userEvent.type(editor, text, { allAtOnce: true });

    expect(preview.textContent).toContain(text);
  });

  it('4 When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type', () => {
    const { container } = render(<App />);
    const editor = container.querySelector('#editor');
    const preview = container.querySelector('#preview');

    const text = `# h1!${String.fromCharCode(13)}${String.fromCharCode(
      13
    )}**bold**`;
    userEvent.type(editor, text, { allAtOnce: true });

    expect(preview.innerHTML).toContain('<h1 id="h1">h1!</h1>');
    expect(preview.innerHTML).toContain('<strong>bold</strong>');
  });
});
