import React from 'react';
import Section from '../../../UI/Section/Section';
import YoutubeImage from './YoutubeImage';
import { YoutubeMovieTypes } from '../../../../types/interfaces';

interface YoutubeMoviesTypes {
  moviesData: YoutubeMovieTypes[] | undefined;
}

const YoutubeSection: React.FC<YoutubeMoviesTypes> = ({ moviesData }) => {
  return (
    <Section section_type="youtube" title="Youtube" title_icon="icon-youtube">
      <div className="content">
        {moviesData?.map((movie) => (
          <YoutubeImage
            medium_image_url={movie.medium_image_url}
            small_image_url={movie.small_image_url}
            youtube_id={movie.youtube_id}
            title={movie.title}
            key={movie.youtube_id}
          />
        ))}
      </div>
    </Section>
  );
};

export default YoutubeSection;
