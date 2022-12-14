import React, { useEffect, useState } from 'react';
import Section from '../../../UI/Section/Section';
import YoutubeImage from './YoutubeImage';
import { YoutubeMovieTypes } from '../../../../types/interfaces';
import axios from 'axios';

interface YoutubeMoviesTypes {
  moviesData: YoutubeMovieTypes[] | undefined;
}

const YoutubeSection: React.FC<YoutubeMoviesTypes> = ({ moviesData }) => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://127.0.0.1:8000/api/category/');

      setData(result.data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <Section section_type="youtube" title="Youtube" title_icon="icon-youtube">
      {moviesData?.map((movie) => (
        <YoutubeImage
          medium_image_url={movie.medium_image_url}
          small_image_url={movie.small_image_url}
          youtube_id={movie.youtube_id}
          title={movie.title}
          key={movie.youtube_id}
        />
      ))}
    </Section>
  );
};

export default YoutubeSection;
