import { useContext, useState, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import useAxios from './hooks/useAxios';
import { InitialDataTypes } from './types/initialDataTypes';

import Loader from './components/UI/Loader/Loader';
import Sidebar from './components/Sidebar/Sidebar';
// import ArtistsView from './components/organisms/ArtistsView/ArtistsView';
// import Button from './components/UI/Button/Buttons';
// import Homepage from './components/organisms/Homepage/Homepage';
// import YoutubeModal from './components/molecules/YoutubeModal/YoutubeModal';

const App = () => {
  const [initData, setInitData] = useState<InitialDataTypes | undefined>(
    undefined
  );

  const [showMenu, setShowMenu] = useState<boolean>(false);
  // const [showStatistics, setShowStatistics] = useState<boolean>(true);

  const {
    loadingType,
    setLoadingType,
    // chosenArtistId,
    // setChosenArtistId,
    // chosenYoutubeId,
    // setChosenYoutubeId,
  } = useContext(AppContext);

  const { isLoading } = useAxios(null, { url: 'init-data' }, setInitData, 1500);

  useEffect(() => {
    setLoadingType((prevState: any) => ({
      ...prevState,
      application: isLoading,
    }));
  }, [isLoading, setLoadingType]);

  // useEffect(() => {
  //   setShowMenu(false);
  //   Boolean(chosenArtistId) && setShowStatistics(false);
  // }, [chosenArtistId]);

  // const showStatisticsHandler = () => {
  //   setShowStatistics(true);
  //   // setTimeout(() => {
  //   setChosenArtistId(undefined);
  //   // }, 500);
  // };

  return (
    <div className={['App', initData && 'App__data-loaded'].join(' ')}>
      <Loader trigger={loadingType?.application} />
      <>
        {/* {initData && (
          <Button
            type="show-menu"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        )}
        {chosenArtistId && (
          <Button type="homepage" onClick={showStatisticsHandler} />
        )} */}
        <div
          className={[
            'artist-list',
            initData ? 'artist-list--loaded' : '',
            showMenu ? 'artist-list--show' : '',
          ].join(' ')}
        >
          <Sidebar artist_list={initData?.artists_list} />
        </div>
      </>

      {/* {showStatistics && Boolean(initData) && (
        <Homepage
          artists_qty={initData?.db_statistics?.artists_qty!}
          release_qty={initData?.db_statistics?.release_qty!}
          track_qty={initData?.db_statistics.track_qty!}
          youtube_qty={initData?.db_statistics.youtube_qty!}
        />
      )} */}

      {/* {!showStatistics && chosenArtistId && <ArtistsView />} */}
      {/* {chosenYoutubeId && (
        <>
          <Backdrop
            type="youtube"
            trigger={Boolean(chosenYoutubeId)}
            onClick={() => setChosenYoutubeId(undefined)}
          /> */}
      {/* <YoutubeModal /> */}
      {/* </> */}
      {/* )} */}
    </div>
  );
};

export default App;
