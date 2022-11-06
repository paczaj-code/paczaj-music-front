import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import useAxios from '../../../hooks/useAxios';
import ArtistDetailsSection from './ArtistDetailslSection/ArtistDetailslSection';
import {
  ArtistDataTypes,
  YoutubeMovieTypes,
  //   ReleaseTypes,
} from '../../../types/interfaces';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';
import YoutubeSection from './YoutubeSection/YoutubeSection';
import YoutubeModal from './Modals/YoutubeModal';

interface ArtistDetailTypes {
  artist_data: ArtistDataTypes | undefined;
  // wikipedia_data:
  youtube_movies: YoutubeMovieTypes[];
  //   releases: {
  //     studio_albums: ReleaseTypes[];
  //     extended_plays: ReleaseTypes[];
  //     compilations: ReleaseTypes[];
  //   };
}

const ArtistsView = () => {
  const [artistDetails, setArtistDetailst] = useState<
    ArtistDetailTypes | undefined
  >(undefined);

  const { chosenArtistId, loadingType, setLoadingType } =
    useContext(AppContext);

  const { isLoading } = useAxios(
    chosenArtistId,
    {
      url: `artist/${chosenArtistId}`,
    },
    setArtistDetailst,
    750
  );

  useEffect(() => {
    setLoadingType((prevState: any) => ({ ...prevState, artist: isLoading }));
    !loadingType?.artist &&
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 0);
  }, [isLoading, setLoadingType, loadingType?.artist]);

  const nodeRef = useRef(null);
  return (
    <>
      <Backdrop trigger={loadingType?.artist} type="artist" withIconLoader />
      <CSSTransition
        in={!loadingType?.artist && Boolean(artistDetails)}
        timeout={700}
        classNames="artist__container artist__animation"
        unmountOnExit
        mountOnEnter
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <ArtistDetailsSection
            artist_name={artistDetails?.artist_data?.artist_name}
            wikipedia_description={
              artistDetails?.artist_data?.wikipedia_data.description
            }
            wikipedia_link={artistDetails?.artist_data?.wikipedia_suffix}
            country={artistDetails?.artist_data?.country}
            country_code={artistDetails?.artist_data?.country_code}
            begin_date_year={artistDetails?.artist_data?.begin_date_year}
            end_date_year={artistDetails?.artist_data?.end_date_year}
            tags={artistDetails?.artist_data?.tags}
          />
          <YoutubeSection moviesData={artistDetails?.youtube_movies} />
          <YoutubeModal />
        </div>
      </CSSTransition>
    </>
  );
};

export default ArtistsView;

//TODO refator i testy
