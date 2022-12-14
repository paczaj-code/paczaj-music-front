import React from 'react';
import Section from '../../../UI/Section/Section';
import { ReleaseTypes } from '../../../../types/interfaces';
import AlbumImage from './AlbumImage';

interface AlbumSectionTypes {
  title: string;
  releases?: ReleaseTypes[];
}

const AlbumSection: React.FC<AlbumSectionTypes> = ({ title, releases }) => {
  return (
    <Section section_type="album" title={title} title_icon="icon-vynil">
      {releases?.map((release: ReleaseTypes) => (
        <AlbumImage
          first_release_date={release.first_release_date}
          id={release.id}
          name={release.name}
          front_small={release.front_small}
        />
      ))}
    </Section>
  );
};

export default AlbumSection;
