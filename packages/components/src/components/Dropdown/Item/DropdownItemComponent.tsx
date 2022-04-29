import * as React from 'react';

interface DropdownItemProps {
  children: React.ReactElement | string;
  handleClick?(): void;
}

export default function DropdownItemComponent({ children, handleClick }: DropdownItemProps) {
  const onClick = () => {
    if (handleClick) handleClick();
  };

  return <li onClick={onClick}>{children}</li>;
}
