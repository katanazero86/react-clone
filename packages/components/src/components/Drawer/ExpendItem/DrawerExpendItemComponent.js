import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ChevronDown from '../../Icons/ChevronDown/ChevronDown';
import ChevronRight from '../../Icons/ChevronRight/ChevronRight';
export default function DrawerExpendItemComponent({ handleExpend, isExpend = false, label = '', expendItems = [], }) {
    const onClick = (e) => {
        const property = e.currentTarget.dataset.name;
        if (handleExpend)
            handleExpend(property);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("li", { onClick: onClick, "data-name": label, children: [label, " ", isExpend ? _jsx(ChevronDown, {}) : _jsx(ChevronRight, {})] }), isExpend && (_jsx("ul", { children: expendItems.map(item => (_jsx("li", { children: item.label }, item.label))) }))] }));
}
