import { render } from '@testing-library/react';

import Reservations from './reservations';

describe('Reservations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reservations />);
    expect(baseElement).toBeTruthy();
  });
});
