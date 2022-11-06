import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import YoutubeImage from '../../ArtistView/YoutubeSection/YoutubeImage';
import { AppContext } from '../../../../context/AppContext';
import { testContextValues } from '../../../../__test__/test-utils';
import { yotubeExampleData } from '../data/testData';

const YoutubeData = yotubeExampleData[0];

describe('Tests for YoutubeImage component', () => {
  beforeEach(() => {
    render(
      <YoutubeImage
        medium_image_url={YoutubeData.medium_image_url}
        small_image_url={YoutubeData.small_image_url}
        title={YoutubeData.title}
        youtube_id={YoutubeData.youtube_id}
      />
    );
  });

  it('should be proper src attr', () => {
    const picture = screen.getByRole('img');

    expect(picture).toHaveAttribute('src', YoutubeData.small_image_url);
  });

  it('should be proper alt attr', () => {
    const picture = screen.getByRole('img');
    expect(picture).toHaveAttribute('alt', YoutubeData.title);
  });

  it('should be proper class', () => {
    const picture = screen.getByRole('img');
    expect(picture).toHaveClass('youtube-picture__image');
  });

  it('should be proper title', () => {
    expect(screen.getByText(/Maximo/i)).toBeInTheDocument();
  });

  it('should be proper alt attr', () => {
    const picture = screen.getByRole('img');
    fireEvent.load(picture);
    expect(picture).toHaveClass('youtube-picture__image--loaded');
  });
});
