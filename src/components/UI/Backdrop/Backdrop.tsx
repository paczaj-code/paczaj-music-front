import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface BackdropTypes {
  onClick: React.MouseEventHandler;
  trigger?: boolean | undefined;
  type: 'application' | 'artist' | 'youtube' | undefined;
  withIconLoader: boolean;
}
const Backdrop: React.FC<Partial<BackdropTypes>> = ({
  onClick,
  trigger,
  type,
  withIconLoader,
}) => {
  return (
    <CSSTransition
      in={trigger}
      timeout={300}
      classNames="backdrop__animation"
      unmountOnExit
      mountOnEnter
      appear
    >
      <div onClick={onClick} className={`backdrop backdrop--${type}`}>
        {withIconLoader && (
          <i className="backdrop__icon icon-spinner2 icon-rotate"></i>
        )}
      </div>
    </CSSTransition>
  );
};

export default Backdrop;
