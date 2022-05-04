import * as React from 'react';
import classes from './SelectComponent.module.scss';
import clsx from 'clsx';
import ChevronDown from '../Icons/ChevronDown/ChevronDown';
import { useEffect, useRef, useState } from 'react';

interface SelectComponentProps {
  children?: React.ReactElement;
  value?: string | number;
}

export default function SelectComponent({ children, value }: SelectComponentProps) {
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

  return (
    <div className={clsx(classes.select)} ref={selectRef}>
      <div className={clsx(classes.box)} onClick={onClick}>
        <p>Litecoin</p> <ChevronDown />
      </div>
      <ul className={clsx(open && classes.expand, classes.items)}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
