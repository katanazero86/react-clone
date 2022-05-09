import { jsx as _jsx } from "react/jsx-runtime";
import classes from './ButtonBasicComponent.module.scss';
import clsx from 'clsx';
export default function ButtonBasicComponent({ name = '', fullWidth = false, handleClick, flat = false, }) {
    const onClick = () => {
        if (handleClick)
            handleClick();
    };
    return (_jsx("button", { className: clsx(classes.buttonBasic, fullWidth && classes.buttonBasicFullWidth, flat && classes.buttonBasicFlat), type: "button", onClick: onClick, children: name }));
}
