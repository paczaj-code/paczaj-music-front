import React, { useContext, useState, useEffect } from 'react';
import { ReleaseDetailsTypes } from '../../../../types/interfaces';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import { AppContext } from '../../../../context/AppContext';
import useAxios from '../../../../hooks/useAxios';
// import AlbumImagePanel from './AlbumImagePanel';
import noImage from '../../../../assets/images/no-cover.png';
import Divider from '../../../UI/Divider/Divider';
import Track from './Track';

const ImageLoader = () => {
  return (
    <p className="image__loader">
      <i className="icon-spinner9 icon-rotate"></i>
    </p>
  );
};

const ReleaseModal = () => {
  const [releaseDetails, setReleaseDetails] = useState<
    ReleaseDetailsTypes | undefined
  >(undefined);
  const [bigLoaded, setBigLoaded] = useState(false);

  const { chosenReleaseId, setChosenReleaseId } = useContext(AppContext);

  const { isLoading } = useAxios(
    chosenReleaseId,
    {
      url: `release/${chosenReleaseId}`,
    },
    setReleaseDetails,
    500
  );
  const closePanleHadler = () => {
    setChosenReleaseId(undefined);
    setReleaseDetails(undefined);
    setBigLoaded(false);
  };

  console.log(chosenReleaseId);
  console.log(bigLoaded);

  useEffect(() => {
    console.log('new');

    !chosenReleaseId && setBigLoaded(false);
    // return () => {
    //   setBigLoaded(false);
    // };
  }, [chosenReleaseId]);

  return (
    <>
      <Backdrop
        trigger={Boolean(chosenReleaseId)}
        onClick={() => closePanleHadler()}
        type="youtube"
      />
      {isLoading && <p>Loading</p>}
      <CSSTransition
        in={Boolean(!isLoading) && Boolean(chosenReleaseId)}
        timeout={300}
        classNames="panel panel_release yotube-modal"
        unmountOnExit
        mountOnEnter
        appear
        onExit={() => setBigLoaded(false)}
      >
        {/* <div className="release__details"> */}
        {!isLoading ? (
          <div className="release_content">
            <div className="release__details">
              <picture className="album__picture">
                {/* <ImageLoader /> */}
                {!bigLoaded && <ImageLoader />}
                <img
                  onLoad={() => setBigLoaded(true)}
                  className={[
                    'album__picture__image',
                    bigLoaded ? 'album__picture__image--loaded' : '',
                    !releaseDetails?.releaseInfo?.front_big
                      ? 'album__picture__image--noImage'
                      : '',
                  ].join(' ')}
                  src={
                    releaseDetails?.releaseInfo?.front_big
                      ? releaseDetails.releaseInfo.front_big
                      : noImage
                  }
                  alt={releaseDetails?.releaseInfo?.release_name}
                />
              </picture>
              <div className="release__details__info">
                <h1>{releaseDetails?.releaseInfo?.release_name}</h1>
                <p>{releaseDetails?.releaseInfo?.artist}</p>
                <p>{releaseDetails?.releaseInfo?.release_year}</p>
                {/* <p>{releaseDetails?.releaseInfo?.track_count}</p> */}
              </div>
            </div>
            <Divider />
            <div className="tracks">
              {releaseDetails?.tracks?.map((track) => (
                <Track
                  key={track.id}
                  name={track.name}
                  position={track.position}
                  length_minutes={track.length_minutes}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
        {/* </div> */}
      </CSSTransition>
    </>
  );
};

export default ReleaseModal;
