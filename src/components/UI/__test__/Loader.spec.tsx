import { render, screen } from '@testing-library/react';
import Loader from '../Loader/Loader';
import { AppContext } from '../../../context/AppContext';
import { testContextValues } from '../../../__test__/test-utils';

const contextValues = {
  ...testContextValues,
  loadingType: { application: false, artist: true, release: false },
};
describe('Tests for Equalizer component', () => {
  it('should be backdrop in the document', () => {
    const { container } = render(
      <AppContext.Provider value={contextValues}>
        <Loader trigger={true} />
      </AppContext.Provider>
    );

    const backdrop = container.querySelector('.backdrop');
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).toHaveClass('backdrop--artist');
  });

  it('should be equalizer in the document', () => {
    const { container } = render(<Loader trigger={true} />);

    const equalizer = container.querySelector('.equalizer');
    expect(equalizer).toBeInTheDocument();
  });
});
