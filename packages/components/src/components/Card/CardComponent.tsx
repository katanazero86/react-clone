import * as React from 'react';
import classes from './CardComponent.module.scss';
import clsx from 'clsx';

interface CardComponentProps {
  children: React.ReactElement;
}

export default function CardComponent({ children }: CardComponentProps) {
  return <div className={clsx(classes.card)}>{children}</div>;
}
