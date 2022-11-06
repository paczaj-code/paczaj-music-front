import React, { useState, useContext } from 'react';
import { AppContext } from '../../../../context/AppContext';
import { YoutubeMovieTypes } from '../../../../types/interfaces';
// import Panel from '../../../UI/Panel/Panel';
// import noImagePNG from '../../../../assets/images/no_image.png';

// interface YoutubeImageTypes extends YoutubeMovieTypes {
//   onClick?: () => {};
// }

const YoutubeImage: React.FC<YoutubeMovieTypes> = ({
  small_image_url,
  medium_image_url,
  title,
  youtube_id,
}) => {
  const { setChosenYoutubeId } = useContext(AppContext);
  const [loaded, setLoaded] = useState(false);
  return (
    <picture className="youtube-picture">
      {!loaded && <p>loading</p>}
      <source srcSet={medium_image_url} media="(min-width: 700px)" />
      <img
        onLoad={() => setLoaded(true)}
        className={[
          'youtube-picture__image',
          loaded ? 'youtube-picture__image--loaded' : '',
        ].join(' ')}
        src={small_image_url}
        alt={title}
        onClick={() => setChosenYoutubeId(youtube_id)}
      />
      <p className="youtube-picture__title">{title}</p>
    </picture>
  );
};

export default YoutubeImage;
