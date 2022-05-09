import { jsx as _jsx } from "react/jsx-runtime";
import classes from './DropdownItemsComponent.module.scss';
import clsx from 'clsx';
export default function DropdownItemsComponent({ open = false, align = 'left', children, }) {
    const alignStyle = () => {
        switch (align) {
            case 'left':
                return {
                    left: 0,
                };
            case 'right':
                return {
                    right: 0,
                };
            default:
                return {
                    left: 0,
                };
        }
    };
    return (_jsx("nav", { style: alignStyle(), className: clsx(classes.dropdownItems, open ? classes.open : classes.close), children: _jsx("ul", { children: children }) }));
}
