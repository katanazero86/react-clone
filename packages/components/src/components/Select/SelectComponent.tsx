import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import classes from './SelectComponent.module.scss';
import clsx from 'clsx';
import ChevronDown from '../Icons/ChevronDown/ChevronDown';
import ChevronUp from '../Icons/ChevronUp/ChevronUp';

interface SelectComponentProps {
  children?: React.ReactElement | React.ReactElement[];
  value?: string | number;
  onChange?(value: string | number): void;
}

export default function SelectComponent({ children, value, onChange }: SelectComponentProps) {
  const selectRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const outsideClick = (e: Event) => {
      const targetEl = e.target as HTMLElement;
      const selectRefEl = selectRef?.current as HTMLElement;

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

  const onItemClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    const targetEl = e.target as HTMLElement;
    const value = targetEl.dataset.value;
    if (value !== undefined) {
      if (onChange) onChange(value);
      setOpen(false);
    }
  };

  return (
    <div className={clsx(classes.select)} ref={selectRef}>
      <div className={clsx(classes.box)} onClick={onClick}>
        <p>{value}</p> {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      <ul className={clsx(open && classes.expand, classes.items)} onClick={onItemClick}>
        {children}
      </ul>
    </div>
  );
}
