import { jsx as _jsx } from "react/jsx-runtime";
import classes from './CardContentComponent.module.scss';
import clsx from 'clsx';
export default function CardContentComponent({ children, noPadding = false }) {
    return _jsx("div", { className: clsx(classes.cardContent, noPadding && classes.noPadding), children: children });
}
