import { jsx as _jsx } from 'react/jsx-runtime';
import classes from './SelectItemComponent.module.scss';
import clsx from 'clsx';
export default function SelectItemComponent({ children, value, selectedValue }) {
  return _jsx('li', {
    className: clsx(value === selectedValue && classes.selected),
    'data-value': value,
    children: children,
  });
}
