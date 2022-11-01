import { render, screen } from '@testing-library/react';
import Divider from '../Divider/Divider';

describe('Tests for Divider component', () => {
  it('should be divider on screen', () => {
    const { container } = render(<Divider classes="test-divider" />);
    const divider = container.querySelector('hr');
    expect(divider).toBeInTheDocument();
  });

  it('should be proper classes', () => {
    const { container } = render(<Divider classes="test-divider" />);
    const divider = container.querySelector('hr');
    expect(divider).toHaveClass('divider');
    expect(divider).toHaveClass('divider--test-divider');
  });
});
