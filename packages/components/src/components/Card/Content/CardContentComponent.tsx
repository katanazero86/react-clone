import * as React from 'react';
import classes from './CardContentComponent.module.scss';
import clsx from 'clsx';

interface CardContentComponentProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function CardContentComponent({ children }: CardContentComponentProps) {
  return <div className={classes.cardContent}>{children}</div>;
}
