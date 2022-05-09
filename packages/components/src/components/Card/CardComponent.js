import { jsx as _jsx } from "react/jsx-runtime";
import classes from './CardComponent.module.scss';
import clsx from 'clsx';
export default function CardComponent({ children, hFull }) {
    return _jsx("div", { className: clsx(classes.card, hFull && classes.hFull), children: children });
}
