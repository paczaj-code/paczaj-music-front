import { render, screen, fireEvent } from '@testing-library/react';
import InfoPanel from '../../ArtistView/ArtistDetailslSection/InfoPanel';
import { artistDetailsData } from '../data/testData';

describe('Tests InfoPanel component', () => {
  it('should be div with panel class', () => {
    const { container } = render(
      <InfoPanel
        country={artistDetailsData.country}
        country_code={artistDetailsData.country_code}
        begin_date_year={artistDetailsData.begin_date_year}
        end_date_year={artistDetailsData.end_date_year}
        tags={artistDetailsData.tags}
      />
    );

    expect(container.querySelector('.panel__info')).toBeInTheDocument();
    expect(container.querySelector('.panel__info')).toBeInTheDocument();
  });

  it('should be 3 panel__info__item divs', () => {
    const { container } = render(
      <InfoPanel
        country={artistDetailsData.country}
        country_code={artistDetailsData.country_code}
        begin_date_year={artistDetailsData.begin_date_year}
        end_date_year={artistDetailsData.end_date_year}
        tags={artistDetailsData.tags}
      />
    );

    const panelInfoItem = container.querySelectorAll(
      'div > .panel__info__item'
    );

    expect(panelInfoItem.length).toEqual(3);
  });

  it('should be proper titles', () => {
    render(
      <InfoPanel
        country={artistDetailsData.country}
        country_code={artistDetailsData.country_code}
        begin_date_year={artistDetailsData.begin_date_year}
        end_date_year={artistDetailsData.end_date_year}
        tags={artistDetailsData.tags}
      />
    );

    expect(screen.getByText(/Kraj/i)).toBeInTheDocument();
    expect(screen.getByText(/Lata aktywności/i)).toBeInTheDocument();
    expect(screen.getByText(/Gatunki/i)).toBeInTheDocument();
  });

  it('should be proper values', () => {
    render(
      <InfoPanel
        country={artistDetailsData.country}
        country_code={artistDetailsData.country_code}
        begin_date_year={artistDetailsData.begin_date_year}
        end_date_year={artistDetailsData.end_date_year}
        tags={artistDetailsData.tags}
      />
    );

    expect(screen.getByText(/Poland/i)).toBeInTheDocument();
    expect(screen.getByText(/1999/i)).toBeInTheDocument();
    expect(screen.getByText(/2002/i)).toBeInTheDocument();
    expect(screen.getByText(/punk/i)).toBeInTheDocument();
    expect(screen.getByText(/indie/i)).toBeInTheDocument();
  });

  it('should be "present" text when end_date_year is undefined', () => {
    render(
      <InfoPanel
        country={artistDetailsData.country}
        country_code={artistDetailsData.country_code}
        begin_date_year={artistDetailsData.begin_date_year}
        end_date_year={undefined}
        tags={artistDetailsData.tags}
      />
    );

    expect(screen.getByText(/present/i)).toBeInTheDocument();
  });
});
