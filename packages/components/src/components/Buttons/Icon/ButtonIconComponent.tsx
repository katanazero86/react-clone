import * as React from 'react';
import classes from './ButtonIconComponent.module.scss';
import clsx from 'clsx';

interface ButtonIconComponentProps {
  children: React.ReactElement;
  width?: number | string;
  height?: number | string;
  handleClick?(): void;
}

export default function ButtonIconComponent({
  children,
  width = 34,
  height = 34,
  handleClick,
}: ButtonIconComponentProps) {
  const onClick = () => {
    if (handleClick) handleClick();
  };

  return (
    <button
      style={{ width: width, height: height }}
      className={clsx(classes.buttonIcon)}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
