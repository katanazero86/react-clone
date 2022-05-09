import * as React from 'react';
interface DropdownItemsComponentProps {
    open: boolean;
    align?: string;
    children: React.ReactElement | Array<React.ReactElement>;
}
export default function DropdownItemsComponent({ open, align, children, }: DropdownItemsComponentProps): JSX.Element;
export {};
