import { jsx as _jsx } from 'react/jsx-runtime';
import classes from './DropdownComponent.module.scss';
import clsx from 'clsx';
export default function DropdownComponent({ children, dropdownRef }) {
  return _jsx('div', { className: clsx(classes.dropdown), ref: dropdownRef, children: children });
}
