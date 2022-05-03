import * as React from 'react';
import classes from './TabComponent.module.scss';
import clsx from 'clsx';

interface TabComponentProps {
  name: string;
  value: number | string;
  currentValue?: number | string;
  handleClick?(e: React.SyntheticEvent, newValue: number | string): void;
}

export default function TabComponent({ name, value, currentValue, handleClick }: TabComponentProps) {
  const onClick = (e: React.SyntheticEvent) => {
    if (handleClick) handleClick(e, value);
  };

  return (
    <button className={clsx(value === currentValue && classes.active)} onClick={onClick}>
      {name}
    </button>
  );
}
