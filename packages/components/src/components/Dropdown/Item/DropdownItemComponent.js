import { jsx as _jsx } from "react/jsx-runtime";
export default function DropdownItemComponent({ children, handleClick }) {
    const onClick = () => {
        if (handleClick)
            handleClick();
    };
    return _jsx("li", { onClick: onClick, children: children });
}
