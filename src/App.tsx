import { useContext, useState, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import useAxios from './hooks/useAxios';
import { InitialDataTypes } from './types/initialDataTypes';
import Loader from './components/UI/Loader/Loader';
import Sidebar from './components/Sidebar/Sidebar';
import ArtistsView from './components/views/ArtistView/ArtistView';
import Button from './components/UI/Button/Buttons';
import Homepage from './components/views/Homepage/Homepage';

const App = () => {
  const [initData, setInitData] = useState<InitialDataTypes | undefined>(
    undefined
  );

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showHompage, setShowHompage] = useState<boolean>(true);

  const { loadingType, setLoadingType, chosenArtistId, setChosenArtistId } =
    useContext(AppContext);

  const { isLoading } = useAxios(null, { url: 'init-data' }, setInitData, 1500);

  useEffect(() => {
    setLoadingType((prevState: any) => ({
      ...prevState,
      application: isLoading,
    }));
  }, [isLoading, setLoadingType]);

  useEffect(() => {
    setShowMenu(false);
    Boolean(chosenArtistId) && setShowHompage(false);
  }, [chosenArtistId]);

  const showHompageHandler = () => {
    setShowHompage(true);
    setChosenArtistId(undefined);
  };

  return (
    <div className={['App', initData && 'App__data-loaded'].join(' ')}>
      <Loader trigger={loadingType?.application} />
      <>
        {initData && (
          <Button
            type="show-menu"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        )}
        {chosenArtistId && (
          <Button type="homepage" onClick={showHompageHandler} />
        )}
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

      {showHompage && Boolean(initData) && (
        <Homepage
          artists_qty={initData?.db_statistics?.artists_qty!}
          release_qty={initData?.db_statistics?.release_qty!}
          track_qty={initData?.db_statistics.track_qty!}
          youtube_qty={initData?.db_statistics.youtube_qty!}
        />
      )}

      {!showHompage && chosenArtistId && <ArtistsView />}
    </div>
  );
};

export default App;
