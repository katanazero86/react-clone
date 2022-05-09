import * as React from 'react';
interface CardComponentProps {
  children: React.ReactElement;
  hFull?: boolean;
}
export default function CardComponent({ children, hFull }: CardComponentProps): JSX.Element;
export {};
