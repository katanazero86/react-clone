import * as React from 'react';
interface SelectComponentProps {
    children?: React.ReactElement | React.ReactElement[];
    value?: string | number;
    onChange?(value: string | number): void;
}
export default function SelectComponent({ children, value, onChange }: SelectComponentProps): JSX.Element;
export {};
