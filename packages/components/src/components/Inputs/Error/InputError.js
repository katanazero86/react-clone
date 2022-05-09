import { jsx as _jsx } from 'react/jsx-runtime';
import classes from './InputError.module.scss';
import clsx from 'clsx';
export default function InputError({ children }) {
  return _jsx('p', { className: clsx(classes.inputError), children: children });
}
