import * as React from 'react';
import classes from './CardComponent.module.scss';
import clsx from 'clsx';

interface CardComponentProps {
  children: React.ReactElement;
  hFull?: boolean;
}

export default function CardComponent({ children, hFull }: CardComponentProps) {
  return <div className={clsx(classes.card, hFull && classes.hFull)}>{children}</div>;
}
