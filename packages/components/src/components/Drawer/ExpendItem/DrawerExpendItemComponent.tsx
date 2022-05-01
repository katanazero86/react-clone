import * as React from 'react';
import ChevronDown from '../../Icons/ChevronDown/ChevronDown';
import ChevronRight from '../../Icons/ChevronRight/ChevronRight';

interface DrawerExpendItemComponentProps {
  handleExpend?(property: string): void;
  isExpend?: boolean;
  label?: string;
  expendItems?: { label?: string }[];
}

export default function DrawerExpendItemComponent({
  handleExpend,
  isExpend = false,
  label = '',
  expendItems = [],
}: DrawerExpendItemComponentProps) {
  const onClick = (e: React.SyntheticEvent) => {
    const property = (e.currentTarget as HTMLElement).dataset.name as string;
    if (handleExpend) handleExpend(property);
  };

  return (
    <>
      <li onClick={onClick} data-name={label}>
        more {isExpend ? <ChevronDown /> : <ChevronRight />}
      </li>
      {isExpend && (
        <ul>
          {expendItems.map(item => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      )}
    </>
  );
}
