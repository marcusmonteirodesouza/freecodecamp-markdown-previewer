import React from 'react';
import { render } from '@testing-library/react';
import Previewer from '.';

describe('Previewer', () => {
  it('should be visible', () => {
    const { container } = render(<Previewer />);
    expect(container).toBeVisible();
  });
});
