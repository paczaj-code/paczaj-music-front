import { render, screen } from '@testing-library/react';
import AlbumSection from '../../ArtistView/AlbumSection/AlbumSection';
import { albumsExampleData } from '../data/testData';
import { AppContext } from '../../../../context/AppContext';
import { testContextValues } from '../../../../__test__/test-utils';
import userEvent from '@testing-library/user-event';
describe('Tests for AlbumSection component', () => {
  beforeEach(() => {
    render(
      <AppContext.Provider value={testContextValues}>
        <AlbumSection title="Studio albums" releases={albumsExampleData} />
      </AppContext.Provider>
    );
  });
  it('should be section with proper class', () => {
    expect(document.querySelector('.section__album')).toBeInTheDocument();
  });
  it('should be heading with proper text', () => {
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
      'Studio albums'
    );
  });

  it('should be 3 images', () => {
    expect(screen.getAllByRole('img').length).toEqual(3);
  });

  it('should be setChosenReleaseId function clalled when image clicked', () => {
    userEvent.click(screen.getAllByRole('img')[0]);
    expect(testContextValues.setChosenReleaseId).toBeCalledTimes(1);
  });
});
