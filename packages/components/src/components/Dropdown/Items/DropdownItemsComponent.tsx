import * as React from 'react';
import classes from './DropdownItemsComponent.module.scss';
import clsx from 'clsx';

interface DropdownItemsComponentProps {
  open: boolean;
  align?: string;
  children: React.ReactElement | Array<React.ReactElement>;
}

export default function DropdownItemsComponent({
  open = false,
  align = 'left',
  children,
}: DropdownItemsComponentProps) {
  const alignStyle = () => {
    switch (align) {
      case 'left':
        return {
          left: 0,
        };
      case 'right':
        return {
          right: 0,
        };
      default:
        return {
          left: 0,
        };
    }
  };

  return (
    <nav style={alignStyle()} className={clsx(classes.dropdownItems, open ? classes.open : classes.close)}>
      <ul>{children}</ul>
    </nav>
  );
}
