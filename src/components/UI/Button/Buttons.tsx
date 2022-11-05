import React from 'react';

interface ButtonTypes {
  type?: 'show-menu' | 'homepage';
  extra_class?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonTypes> = ({
  type,
  extra_class,
  children,
  onClick,
}) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={[
        'button',
        type && `button--${type}`,
        extra_class && `button--${extra_class}`,
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
