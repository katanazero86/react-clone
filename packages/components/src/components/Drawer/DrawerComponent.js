import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from './DrawerComponent.module.scss';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import DrawerItemComponent from './Item/DrawerItemComponent';
import DrawerExpendItemComponent from './ExpendItem/DrawerExpendItemComponent';
export default function DrawerComponent({ open, close, items = [] }) {
    const drawerRef = useRef(null);
    const onClick = (e) => {
        const refEl = drawerRef?.current;
        if (refEl === e.target) {
            if (close)
                close();
        }
    };
    const [expend, setExpend] = useState({});
    const handleExpendClick = (property) => {
        if (expend[property] === undefined) {
            setExpend({
                [property]: true,
            });
        }
        else {
            setExpend({
                ...expend,
                [property]: !expend[property],
            });
        }
    };
    return (_jsx("div", { className: clsx(classes.drawer, open ? classes.drawerOpen : ''), onClick: onClick, ref: drawerRef, children: _jsxs("div", { className: clsx(classes.side), children: [_jsx("h2", { children: "MENU" }), _jsx("ul", { children: items.map(item => {
                        if (item.isExpend) {
                            return (_jsx(DrawerExpendItemComponent, { handleExpend: handleExpendClick, isExpend: expend[item.label], expendItems: item.expendItems, label: item.label }, item.label));
                        }
                        return _jsx(DrawerItemComponent, { children: item.label }, item.label);
                    }) })] }) }));
}
