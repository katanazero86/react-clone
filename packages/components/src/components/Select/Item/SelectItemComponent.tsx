import * as React from 'react';
import classes from './SelectItemComponent.module.scss';
import clsx from 'clsx';

interface SelectItemComponentProps {
  children?: string | React.ReactElement;
  value?: string | number;
  selectedValue?: string | number;
}

export default function SelectItemComponent({ children, value, selectedValue }: SelectItemComponentProps) {
  return (
    <li className={clsx(value === selectedValue && classes.selected)} data-value={value}>
      {children}
    </li>
  );
}
