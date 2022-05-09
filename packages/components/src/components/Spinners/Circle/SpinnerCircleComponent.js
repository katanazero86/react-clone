import { jsx as _jsx } from 'react/jsx-runtime';
import classes from './SpinnerCircleComponent.module.scss';
import clsx from 'clsx';
export default function SpinnerCircleComponent() {
  return _jsx('div', {
    className: clsx(classes.spinnerCircle),
    children: _jsx('div', { className: clsx(classes.circle) }),
  });
}
