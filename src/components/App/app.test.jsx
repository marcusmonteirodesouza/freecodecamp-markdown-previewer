import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

describe('App', () => {
  it('is visible', () => {
    const { container } = render(<App />);
    expect(container).toBeVisible();
  });
});
