import * as React from 'react';
import classes from './ButtonIconComponent.module.scss';
import clsx from 'clsx';

interface ButtonIconComponentProps {
  children: React.ReactElement;
}

export default function ButtonIconComponent({ children }: ButtonIconComponentProps) {
  return (
    <button className={clsx(classes.buttonIcon)} type="button">
      {children}
    </button>
  );
}
