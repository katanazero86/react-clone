import * as React from 'react';
import classes from './AppBar.module.scss';
import clsx from 'clsx';

interface HeaderComponentProps {
  children: React.ReactNode;
}

export default function AppBarComponent({ children }: HeaderComponentProps) {
  return <header className={clsx(classes.appBar)}>{children}</header>;
}
