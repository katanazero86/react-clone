import * as React from 'react';
import { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './DrawerComponent.module.scss';
import clsx from 'clsx';
import DrawerItemComponent from './Item/DrawerItemComponent';
import DrawerExpendItemComponent from './ExpendItem/DrawerExpendItemComponent';

interface IExpend {
  [key: string]: boolean;
}

interface IItem {
  label?: string;
  isExpend?: boolean;
  path?: string;
  expendItems?: { label?: string; path?: string }[];
}

interface DrawerComponentProps {
  open?: boolean;
  close?(): void;
  items?: IItem[];
}

export default function DrawerComponent({ open, close, items = [] }: DrawerComponentProps) {
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleItemClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    const targetEl = e.target as HTMLElement;
    const path = targetEl.dataset.path;
    if (path === location.pathname) {
      navigate(0);
    } else {
      if (path !== '' && path !== undefined) navigate(path);
    }
  };

  return (
    <div className={clsx(classes.drawer, open ? classes.drawerOpen : '')} onClick={onClick} ref={drawerRef}>
      <div className={clsx(classes.side)}>
        <h2>MENU</h2>
        <ul onClick={handleItemClick}>
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

            return <DrawerItemComponent key={item.label} label={item.label} path={item.path} />;
          })}
        </ul>
      </div>
    </div>
  );
}
