import * as React from 'react';
import ChevronDown from '../../Icons/ChevronDown/ChevronDown';
import ChevronRight from '../../Icons/ChevronRight/ChevronRight';

interface DrawerExpendItemComponentProps {
  handleExpend?(property: string): void;
  isExpend?: boolean;
  label?: string;
  path?: string;
  expendItems?: { label?: string; path?: string }[];
}

export default function DrawerExpendItemComponent({
  handleExpend,
  isExpend = false,
  label = '',
  path = '',
  expendItems = [],
}: DrawerExpendItemComponentProps) {
  const onClick = (e: React.SyntheticEvent) => {
    const property = (e.currentTarget as HTMLElement).dataset.name as string;
    if (handleExpend) handleExpend(property);
  };

  return (
    <>
      <li onClick={onClick} data-name={label} data-path={path}>
        {label} {isExpend ? <ChevronDown /> : <ChevronRight />}
      </li>
      {isExpend && (
        <ul>
          {expendItems.map(item => (
            <li key={item.label} data-path={item.path}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
