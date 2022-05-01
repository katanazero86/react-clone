import * as React from 'react';
import classes from './DrawerComponent.module.scss';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import DrawerItemComponent from './Item/DrawerItemComponent';
import DrawerExpendItemComponent from './ExpendItem/DrawerExpendItemComponent';

interface IExpend {
  [key: string]: boolean;
}

interface IItem {
  label?: string;
  isExpend?: boolean;
  expendItems?: { label?: string }[];
}

interface DrawerComponentProps {
  open?: boolean;
  close?(): void;
  items?: IItem[];
}

export default function DrawerComponent({ open, close, items = [] }: DrawerComponentProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const onClick = (e: React.SyntheticEvent) => {
    const refEl = drawerRef?.current;
    if (refEl === e.target) {
      if (close) close();
    }
  };

  const [expend, setExpend] = useState<IExpend>({});
  const handleExpendClick = (property: string) => {
    if (expend[property] === undefined) {
      setExpend({
        [property]: true,
      });
    } else {
      setExpend({
        ...expend,
        [property]: !expend[property],
      });
    }
  };

  return (
    <div className={clsx(classes.drawer, open ? classes.drawerOpen : '')} onClick={onClick} ref={drawerRef}>
      <div className={clsx(classes.side)}>
        <h2>MENU</h2>
        <ul>
          {items.map(item => {
            if (item.isExpend) {
              return (
                <DrawerExpendItemComponent
                  key={item.label}
                  handleExpend={handleExpendClick}
                  isExpend={expend[item.label as string]}
                  expendItems={item.expendItems}
                  label={item.label}
                />
              );
            }

            return <DrawerItemComponent key={item.label}>{item.label}</DrawerItemComponent>;
          })}
        </ul>
      </div>
    </div>
  );
}
