import * as React from 'react';
interface DropdownProps {
  children: Array<React.ReactElement>;
  dropdownRef: React.RefObject<HTMLDivElement>;
}
export default function DropdownComponent({ children, dropdownRef }: DropdownProps): JSX.Element;
export {};
