import { render, screen } from '@testing-library/react';
import Button from '../Button/Buttons';
import userEvent from '@testing-library/user-event';

const onClick = jest.fn();

describe('Tests for Button component', () => {
  it('should be button on screen with proper class', () => {
    render(<Button type="homepage" />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('button--homepage');
  });

  it('should be extra class when extra_class prop given', () => {
    render(<Button type="homepage" extra_class="test" />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('button--test');
  });

  it('should be function onClick fired when button clicked', () => {
    render(<Button type="homepage" onClick={onClick} />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
