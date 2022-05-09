import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import classes from './InputCheckboxComponent.module.scss';
import clsx from 'clsx';
export default function InputCheckboxComponent({ label, value, checked, disabled, handleChange }) {
  const onChange = e => {
    if (handleChange) handleChange(e);
  };
  return _jsx('div', {
    className: clsx(classes.inputCheckbox),
    children: _jsxs('label', {
      children: [
        _jsx('input', { type: 'checkbox', value: value, checked: checked, disabled: disabled, onChange: onChange }),
        _jsx('span', {
          className: clsx(classes.check),
          children: _jsx('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '18',
            height: '18',
            fill: 'currentColor',
            viewBox: '0 0 16 16',
            children: _jsx('path', {
              d: 'M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z',
            }),
          }),
        }),
        _jsx('span', { className: clsx(classes.checkboxLabel), children: label }),
      ],
    }),
  });
}
