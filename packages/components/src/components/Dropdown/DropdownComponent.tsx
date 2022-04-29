import * as React from 'react';
import classes from './DropdownComponent.module.scss';
import clsx from 'clsx';

interface DropdownProps {
  children: Array<React.ReactElement>;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

export default function DropdownComponent({ children, dropdownRef }: DropdownProps) {
  return (
    <div className={clsx(classes.dropdown)} ref={dropdownRef}>
      {children}
    </div>
  );
}
