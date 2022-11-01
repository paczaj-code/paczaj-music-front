import React from 'react';

interface PanelTypes {
  children: React.ReactNode | React.ReactNode[];
  extra_class?: string;
}

const Panel: React.FC<PanelTypes> = ({ children, extra_class }) => {
  return <div className={`panel panel--${extra_class}`}>{children}</div>;
};

export default Panel;

// TODO dodać testy
