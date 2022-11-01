import React from 'react';
interface DividerTypes {
  classes?: string | undefined;
}

const Divider: React.FC<DividerTypes> = ({ classes }) => {
  return <hr className={`divider divider--${classes}`} />;
};

export default Divider;
