import * as React from 'react';
import classes from './DropdownComponent.module.scss';
import clsx from 'clsx';

interface DropdownComponentProps {
  children: React.ReactNode;
}

export default function DropdownComponent({ children }: DropdownComponentProps) {
  return <div className={clsx(classes.dropdown)}></div>;
}
