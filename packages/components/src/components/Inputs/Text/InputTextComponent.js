import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from 'react/jsx-runtime';
import classes from './InputTextComponent.module.scss';
import clsx from 'clsx';
import InputError from '../Error/InputError';
export default function InputTextComponent({ placeholder, value, handleInput, error }) {
  const onInput = e => {
    if (handleInput) handleInput(e.target.value);
  };
  return _jsxs(_Fragment, {
    children: [
      _jsx('input', {
        className: clsx(classes.inputText),
        type: 'text',
        placeholder: placeholder,
        onInput: onInput,
        value: value,
      }),
      error !== undefined && _jsx(InputError, { children: error }),
    ],
  });
}
