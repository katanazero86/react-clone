import { jsx as _jsx } from 'react/jsx-runtime';
import * as React from 'react';
import classes from './TabsComponent.module.scss';
import clsx from 'clsx';
export default function TabsComponent({ value, handleClick, children }) {
  return _jsx('div', {
    className: clsx(classes.tabs),
    children: React.Children.map(children, child => {
      return React.cloneElement(child, {
        currentValue: value,
        handleClick: handleClick,
      });
    }),
  });
}
