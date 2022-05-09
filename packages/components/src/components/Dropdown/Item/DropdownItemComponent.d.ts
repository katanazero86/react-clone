import * as React from 'react';
interface DropdownItemProps {
    children: React.ReactElement | string;
    handleClick?(): void;
}
export default function DropdownItemComponent({ children, handleClick }: DropdownItemProps): JSX.Element;
export {};
