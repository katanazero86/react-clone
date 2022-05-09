import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import classes from './SpinnerDotComponent.module.scss';
import clsx from 'clsx';
export default function SpinnerDotComponent() {
  return _jsx('div', {
    className: clsx(classes.spinnerDot),
    children: _jsx('div', {
      className: clsx(classes.loaderSpin),
      children: _jsxs('span', {
        className: clsx(classes.dot, classes.dotSpin),
        children: [_jsx('i', {}), _jsx('i', {}), _jsx('i', {}), _jsx('i', {}), _jsx('i', {})],
      }),
    }),
  });
}
