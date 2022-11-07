import React from 'react';

interface HeadingTypes {
  title: string | undefined;
  title_icon?: string;
  heading_type: 'artists-details' | string;
  extra_class?: string | undefined;
}

const Heading: React.FC<HeadingTypes> = ({
  title,
  title_icon,
  heading_type,
  extra_class,
}) => {
  return (
    <h2 className={[`heading--${heading_type}`, extra_class].join(' ')}>
      {title_icon && <i className={title_icon}></i>}
      {title}
    </h2>
  );
};

export default Heading;
