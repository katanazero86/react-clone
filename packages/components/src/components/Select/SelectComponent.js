import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import classes from './SelectComponent.module.scss';
import clsx from 'clsx';
import ChevronDown from '../Icons/ChevronDown/ChevronDown';
import ChevronUp from '../Icons/ChevronUp/ChevronUp';
export default function SelectComponent({ children, value, onChange }) {
  const selectRef = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const outsideClick = e => {
      const targetEl = e.target;
      const selectRefEl = selectRef?.current;
      if (selectRef !== null && !selectRefEl.contains(targetEl)) {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener('click', outsideClick);
    }
    return () => {
      window.removeEventListener('click', outsideClick);
    };
  }, [open, selectRef]);
  const onClick = () => {
    setOpen(!open);
  };
  const onItemClick = e => {
    e.stopPropagation();
    const targetEl = e.target;
    const value = targetEl.dataset.value;
    if (value !== undefined) {
      if (onChange) onChange(value);
      setOpen(false);
    }
  };
  return _jsxs('div', {
    className: clsx(classes.select),
    ref: selectRef,
    children: [
      _jsxs('div', {
        className: clsx(classes.box),
        onClick: onClick,
        children: [_jsx('p', { children: value }), ' ', open ? _jsx(ChevronUp, {}) : _jsx(ChevronDown, {})],
      }),
      _jsx('ul', { className: clsx(open && classes.expand, classes.items), onClick: onItemClick, children: children }),
    ],
  });
}
