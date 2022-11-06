import React, { useContext } from 'react';
import { AppContext } from '../../../../context/AppContext';
import YouTube, { YouTubeProps } from 'react-youtube';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';

const YoutubeModal = () => {
  const { chosenYoutubeId, setChosenYoutubeId } = useContext(AppContext);
  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <>
      <Backdrop
        trigger={Boolean(chosenYoutubeId)}
        onClick={() => setChosenYoutubeId(undefined)}
        type="youtube"
      />
      <CSSTransition
        in={Boolean(chosenYoutubeId)}
        timeout={300}
        classNames="yotube-modal"
        unmountOnExit
        mountOnEnter
        appear
      >
        <YouTube videoId={chosenYoutubeId} opts={opts} className="player" />
      </CSSTransition>
    </>
  );
};
export default YoutubeModal;
