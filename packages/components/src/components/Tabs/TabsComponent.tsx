import * as React from 'react';
import classes from './TabsComponent.module.scss';
import clsx from 'clsx';

interface TabsComponentProps {
  value: number | string;
  handleClick(e: React.SyntheticEvent, newValue: number | string): void;
  children: React.ReactElement | React.ReactElement[];
}

export default function TabsComponent({ value, handleClick, children }: TabsComponentProps) {
  return (
    <div className={clsx(classes.tabs)}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          currentValue: value,
          handleClick: handleClick,
        });
      })}
    </div>
  );
}
