import React from 'react';
import Heading from '../Heading/Heading';
import Divider from '../../UI/Divider/Divider';

interface SectionTypes {
  section_type: 'album' | 'youtube' | 'artists-details' | 'homepage';
  title?: string;
  title_icon?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Section: React.FC<SectionTypes> = ({
  children,
  section_type,
  title,
  title_icon,
}) => {
  return (
    <section className={`section section__${section_type}`}>
      {title && (
        <>
          <Heading
            heading_type={section_type}
            title={title}
            title_icon={title_icon}
          />
          <Divider classes={section_type} />
        </>
      )}
      {children}
    </section>
  );
};

export default Section;
