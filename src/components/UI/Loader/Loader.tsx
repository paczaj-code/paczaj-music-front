import React, { useContext, useRef } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Equalizer from '../Equalizer/Equalizer';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../../../context/AppContext';
import Panel from '../Panel/Panel';

interface LoaderTypes {
  trigger?: boolean | undefined;
}

const Loader: React.FC<LoaderTypes> = ({ trigger }) => {
  const { loadingType } = useContext(AppContext);
  const nodeRef = useRef(null);
  return (
    <>
      <Backdrop
        nodeRef={nodeRef}
        trigger={trigger}
        type={loadingType?.artist ? 'artist' : 'application'}
      />

      <CSSTransition
        nodeRef={nodeRef}
        in={trigger}
        timeout={600}
        classNames="loader__animation"
        unmountOnExit
        mountOnEnter
        appear
      >
        <Panel extra_class="loader" nodeRef={nodeRef}>
          <Equalizer />
          <h1 className="loader__title">
            <span className="love">I❤️ </span> <br />
            ROCK<span className="rocknroll"> & </span>ROLL
          </h1>
        </Panel>
      </CSSTransition>
    </>
  );
};

export default Loader;
