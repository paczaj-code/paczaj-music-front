import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import YoutubeModal from '../../ArtistView/Modals/YoutubeModal';
import { AppContext } from '../../../../context/AppContext';
import { testContextValues } from '../../../../__test__/test-utils';

testContextValues.chosenYoutubeId = 'aaaa';

describe('Tests for YoutubeModal component', () => {
  it('should be Backdrop and modal on the screen', () => {
    render(
      <AppContext.Provider value={testContextValues}>
        <YoutubeModal />
      </AppContext.Provider>
    );

    expect(document.querySelector('.backdrop')).toBeInTheDocument();
    expect(document.querySelector('.player')).toBeInTheDocument();
  });

  it('should be setChosenYoutubeId fired when backdrop clicked', () => {
    render(
      <AppContext.Provider value={testContextValues}>
        <YoutubeModal />
      </AppContext.Provider>
    );

    userEvent.click(document.querySelector('.backdrop')!);
    expect(testContextValues.setChosenYoutubeId).toBeCalledTimes(1);
  });
});
