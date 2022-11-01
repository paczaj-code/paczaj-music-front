import React from 'react';

interface HeadingTypes {
  title: string | undefined;
  heading_type: 'artist__name' | 'section';
  extra_class?: string | undefined;
}

const Heading: React.FC<HeadingTypes> = ({
  title,
  heading_type,
  extra_class,
}) => {
  return (
    <h2 className={[`heading--${heading_type}`, extra_class].join(' ')}>
      {title}
    </h2>
  );
};

export default Heading;
