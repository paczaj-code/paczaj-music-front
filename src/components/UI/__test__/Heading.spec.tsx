import { render, screen } from '@testing-library/react';
import Heading from '../Heading/Heading';

describe('Tests for Heading component', () => {
  it('should be proper text ', () => {
    render(<Heading title="Some title" heading_type="section" />);
    const headingElement = screen.getByRole('heading');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('heading--section');
  });

  it('should be proper class with given "heading_type" prop', () => {
    render(<Heading title="Some title" heading_type="artist__name" />);
    const headingElement = screen.getByText(/Some title/i);

    expect(headingElement).toHaveClass('heading--artist__name');
  });
});
