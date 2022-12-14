import React, { useState } from 'react';
import { ReleaseInfo } from '../../../../types/interfaces';

const ImageLoader = () => {
  return (
    <p className="release__panel__image__loader">
      <i className="icon-spinner9 icon-rotate"></i>
    </p>
  );
};

const AlbumImagePanel: React.FC<Partial<ReleaseInfo>> = ({ front_big }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <picture className="release__panel__album-picture">
        {!loaded && <ImageLoader />}
        <img
          onLoad={() => setLoaded(true)}
          className={[
            'release__panel__image',
            loaded ? 'album-picture__image--loaded' : '',
            !front_big ? 'album-picture__image--noImage' : '',
          ].join(' ')}
          src={front_big ? front_big : front_big}
          alt={front_big}
        />
      </picture>
    </>
  );
};

export default AlbumImagePanel;
