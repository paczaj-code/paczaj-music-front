import React from 'react';

interface PanelTypes {
  children: React.ReactNode | React.ReactNode[];
  extra_class?: string;
  nodeRef?: any;
}

const Panel: React.FC<PanelTypes> = ({ children, extra_class, nodeRef }) => {
  return (
    <div ref={nodeRef} className={`panel panel__${extra_class}`}>
      {children}
    </div>
  );
};

export default Panel;
