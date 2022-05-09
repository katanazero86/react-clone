import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classes from './InputPasswordComponent.module.scss';
import clsx from 'clsx';
import InputError from '../Error/InputError';
export default function InputPasswordComponent({ placeholder, value, handleInput, error, }) {
    const onInput = (e) => {
        if (handleInput)
            handleInput(e.target.value);
    };
    return (_jsxs(_Fragment, { children: [_jsx("input", { className: clsx(classes.inputPassword), type: "password", placeholder: placeholder, onInput: onInput, value: value }), error !== undefined && _jsx(InputError, { children: error })] }));
}
