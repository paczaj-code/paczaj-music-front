import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArtistDetailsSection from '../../ArtistView/ArtistDetailslSection/ArtistDetailslSection';
import { artistDetailsData } from '../data/testData';

describe('Tests for ArtistDetailsSection', () => {
  beforeEach(() => {
    render(
      <ArtistDetailsSection
        artist_name={artistDetailsData.artist_name}
        wikipedia_description={artistDetailsData.wikipedia_description}
        wikipedia_link={artistDetailsData.wikipedia_link}
        country={artistDetailsData.country}
        country_code={artistDetailsData.country_code}
        begin_date_year={artistDetailsData.begin_date_year}
        end_date_year={artistDetailsData.end_date_year}
        tags={artistDetailsData.tags}
      />
    );
  });
  it('should be proper section ', () => {
    expect(
      document.querySelector('.section__artists-details')
    ).toBeInTheDocument();
  });

  it('should be heading with proper artist name', () => {
    const artistName = screen.getByRole('heading');
    expect(artistName).toHaveClass('heading--artists-details');
    expect(artistName.innerHTML).toContain(artistDetailsData.artist_name);
  });

  it('should be wikipedia text', () => {
    const wikiText = screen.getByText(/Morbi tristique senectus et netus/i);
    expect(wikiText).toBeInTheDocument();
  });
  it('should be country', () => {
    const contry = screen.getByText(/Poland/i);
    expect(contry).toBeInTheDocument();
  });
  it('should be country code', () => {
    const contry_code = screen.getByRole('img');
    expect(contry_code).toHaveAttribute(
      'src',
      `https://www.countryflagicons.com/SHINY/32/${artistDetailsData.country_code!.trim()}.png`
    );
  });
  it('should be tags', () => {
    const tags = document.querySelectorAll('.tag');
    expect(tags.length).toEqual(2);
    expect(tags[0].innerHTML).toEqual('indie');
  });

  it('should be wikipedia link', () => {
    const wikiLink = screen.getByRole('link');

    expect(wikiLink).toBeInTheDocument();
    expect(wikiLink).toHaveAttribute(
      'href',
      `https://en.wikipedia.org/wiki/${artistDetailsData.wikipedia_link}`
    );
  });

  it('should be show more button', () => {
    const showMoreButton = screen.getByRole('button');
    expect(showMoreButton).toBeInTheDocument();
    expect(showMoreButton.innerHTML).toEqual('+ Więcej');

    userEvent.click(showMoreButton);

    expect(showMoreButton.innerHTML).toEqual('- Mniej');
  });
});
