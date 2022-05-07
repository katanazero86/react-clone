import * as React from 'react';
import classes from './CardContentComponent.module.scss';
import clsx from 'clsx';

interface CardContentComponentProps {
  children: React.ReactElement | React.ReactElement[];
  noPadding?: boolean;
}

export default function CardContentComponent({ children, noPadding = false }: CardContentComponentProps) {
  return <div className={clsx(classes.cardContent, noPadding && classes.noPadding)}>{children}</div>;
}
