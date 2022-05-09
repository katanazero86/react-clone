import { jsx as _jsx } from "react/jsx-runtime";
import classes from './ButtonIconComponent.module.scss';
import clsx from 'clsx';
export default function ButtonIconComponent({ children, width = 34, height = 34, handleClick, }) {
    const onClick = () => {
        if (handleClick)
            handleClick();
    };
    return (_jsx("button", { style: { width: width, height: height }, className: clsx(classes.buttonIcon), type: "button", onClick: onClick, children: children }));
}
