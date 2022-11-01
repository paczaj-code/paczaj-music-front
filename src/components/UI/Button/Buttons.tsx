import React from 'react';

interface ButtonTypes {
  type?: 'show-menu' | 'homepage';
  extra_class?: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<ButtonTypes> = ({ type, extra_class, onClick }) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={[
        `button button--${type}`,
        extra_class && `button--${extra_class}`,
      ].join(' ')}
      onClick={onClick}
    ></button>
  );
};

export default Button;
