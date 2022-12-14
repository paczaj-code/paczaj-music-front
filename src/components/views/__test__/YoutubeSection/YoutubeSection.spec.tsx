import { render, screen } from '@testing-library/react';
import { yotubeExampleData } from '../data/testData';
import userEvent from '@testing-library/user-event';
import { AppContext } from '../../../../context/AppContext';
import { testContextValues } from '../../../../__test__/test-utils';
import YoutubeSection from '../../../../components/views/ArtistView/YoutubeSection/YoutubeSection';

describe('Tests for YoutubeSection component', () => {
  beforeEach(() => {
    render(<YoutubeSection moviesData={yotubeExampleData} />);
  });

  it('should be proper title', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading').innerHTML).toContain('Youtube');
  });
  it('should be 3 images', () => {
    expect(screen.getAllByRole('img').length).toEqual(3);
  });
});

describe('Name of the group', () => {
  it('should ', () => {
    render(
      <AppContext.Provider value={testContextValues}>
        <YoutubeSection moviesData={yotubeExampleData} />{' '}
      </AppContext.Provider>
    );

    userEvent.click(screen.getAllByRole('img')[0]);
    expect(testContextValues.setChosenYoutubeId).toBeCalledTimes(1);
  });
});
