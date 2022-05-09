import { jsx as _jsx } from 'react/jsx-runtime';
import classes from './AppBar.module.scss';
import clsx from 'clsx';
export default function AppBarComponent({ children }) {
  return _jsx('header', { className: clsx(classes.appBar), children: children });
}
