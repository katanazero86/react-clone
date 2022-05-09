import * as React from 'react';
interface TabsComponentProps {
  value: number | string;
  handleClick(e: React.SyntheticEvent, newValue: number | string): void;
  children: React.ReactElement | React.ReactElement[];
}
export default function TabsComponent({ value, handleClick, children }: TabsComponentProps): JSX.Element;
export {};
