import React, { useState, useContext } from 'react';
import { ReleaseTypes } from '../../../../types/interfaces';
import noImage from '../../../../assets/images/no-cover.png';
import { AppContext } from '../../../../context/AppContext';

const ImageLoader = () => {
  return (
    <p className="image__loader">
      <i className="icon-spinner9 icon-rotate"></i>
    </p>
  );
};

const AlbumImage: React.FC<ReleaseTypes> = ({
  name,
  front_small,
  first_release_date,
  id,
}) => {
  const { setChosenReleaseId } = useContext(AppContext);
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <picture className="album-picture">
        {!loaded && <ImageLoader />}
        <img
          onLoad={() => setLoaded(true)}
          className={[
            'album-picture__image',
            loaded ? 'album-picture__image--loaded' : '',
            !front_small ? 'album-picture__image--noImage' : '',
          ].join(' ')}
          src={front_small ? front_small : noImage}
          alt={name}
          onClick={() => setChosenReleaseId(id)}
        />
        <h3 className="album-picture__title">
          {name}
          <span className="album-picture__release-year">
            {first_release_date}
          </span>
        </h3>
      </picture>
    </>
  );
};

export default AlbumImage;
