import { jsx as _jsx } from "react/jsx-runtime";
import classes from './TabComponent.module.scss';
import clsx from 'clsx';
export default function TabComponent({ name, value, currentValue, handleClick }) {
    const onClick = (e) => {
        if (handleClick)
            handleClick(e, value);
    };
    return (_jsx("button", { className: clsx(value === currentValue && classes.active), onClick: onClick, children: name }));
}
