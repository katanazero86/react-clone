import * as React from 'react';
interface CardContentComponentProps {
  children: React.ReactElement | React.ReactElement[];
  noPadding?: boolean;
}
export default function CardContentComponent({ children, noPadding }: CardContentComponentProps): JSX.Element;
export {};
