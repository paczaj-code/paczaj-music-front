import React, { useState, useEffect, useContext } from 'react';
import Section from '../../../../components/UI/Section/Section';
import parse from 'html-react-parser';
import { AppContext } from '../../../../context/AppContext';
import Button from '../../../UI/Button/Buttons';
import InfoPanel from './InfoPanel';

interface ArtistDetailsSectionTypes {
  artist_name: string | undefined;
  wikipedia_description: string | undefined;
  wikipedia_link: string | undefined;
  country: string | undefined;
  country_code: string | undefined;
  begin_date_year: number | undefined;
  end_date_year: number | undefined;
  tags: string[] | undefined;
}
const ArtistDetailsSection: React.FC<ArtistDetailsSectionTypes> = ({
  artist_name,
  wikipedia_description,
  wikipedia_link,
  country,
  country_code,
  begin_date_year,
  end_date_year,
  tags,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [wikiInfoHeight, setWikiInfoHeight] = useState<number | null>(null);
  const { chosenArtistId } = useContext(AppContext);

  useEffect(() => {
    const wikiHeight = document.querySelector(
      '.wikipedia__desctription__text'
    )?.scrollHeight;
    setWikiInfoHeight(wikiHeight!);

    const buttonShowMore = document.querySelector('.button--show__more');

    if (wikiHeight! < 200) {
      buttonShowMore?.classList.add('button--show__more--hidden');
    } else {
      buttonShowMore?.classList.remove('button--show__more--hidden');
    }
  }, []);

  useEffect(() => {
    setShowMore(false);
  }, [chosenArtistId]);

  return (
    <Section section_type="artists-details" title={artist_name}>
      <div className="wikipedia">
        <div className="wikipedia__desctription">
          <p
            className={`wikipedia__desctription__text${
              showMore ? '--expanded' : ''
            }`}
            style={{
              maxHeight: showMore ? wikiInfoHeight! : 190,
              transition: 'all 0.3s linear',
            }}
          >
            {wikipedia_description && parse(wikipedia_description)}
          </p>
          <div className="wikipedia__desctription__buttons">
            <Button
              extra_class="show__more"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? '- Mniej' : '+ Więcej'}
            </Button>
            <p>
              Źródło:{' '}
              <a
                href={`https://en.wikipedia.org/wiki/${wikipedia_link}`}
                target="blank"
                className="wikipedia__link"
              >
                Wikipedia
              </a>
            </p>
          </div>
        </div>
        <div className="wikipedia__info">
          <InfoPanel
            country={country}
            country_code={country_code}
            begin_date_year={begin_date_year}
            end_date_year={end_date_year}
            tags={tags}
          />
        </div>
      </div>
    </Section>
  );
};

export default ArtistDetailsSection;

// TODO rpoprawki przy braku z wikipedii
