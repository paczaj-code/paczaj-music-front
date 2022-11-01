import React from 'react';

interface SectionTypes {
  section_type: 'album' | 'youtube' | 'artists-details' | 'homepage';
  children: React.ReactNode | React.ReactNode[];
}

const Section: React.FC<SectionTypes> = ({ children, section_type }) => {
  return <section className={`section__${section_type}`}>{children}</section>;
};

export default Section;
