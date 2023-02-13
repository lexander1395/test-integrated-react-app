import { render } from '@testing-library/react';

import SharedWeb from './shared-web';

describe('SharedWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedWeb />);
    expect(baseElement).toBeTruthy();
  });
});
