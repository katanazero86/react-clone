import * as React from 'react';
interface ButtonIconComponentProps {
    children: React.ReactElement;
    width?: number | string;
    height?: number | string;
    handleClick?(): void;
}
export default function ButtonIconComponent({ children, width, height, handleClick, }: ButtonIconComponentProps): JSX.Element;
export {};
