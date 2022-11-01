import { render, screen } from '@testing-library/react';
import Equalizer from '../Equalizer/Equalizer';

describe('Tests for Equalizer component', () => {
  it('should be in the document', () => {
    const { container } = render(<Equalizer />);
    const equalizer = container.querySelector('.equalizer');

    expect(equalizer).toBeInTheDocument();
  });

  it('should be 8 spans in the Equalizer', () => {
    const { container } = render(<Equalizer />);
    const equalizerSpans = container.querySelectorAll('.equalizer > span');

    expect(equalizerSpans.length).toEqual(8);
  });
});
