import React from 'react';
import { render } from '@testing-library/react';
import Editor from '.';

describe('Editor', () => {
  test('1 I can see a textarea element with a corresponding id="editor"', () => {
    const { container } = render(<Editor />);
    const textArea = container.querySelector('#editor');
    expect(textArea).toBeVisible();
    expect(textArea.tagName).toBe('TEXTAREA');
  });
});
