import * as React from 'react';
interface TabComponentProps {
  name: string;
  value: number | string;
  currentValue?: number | string;
  handleClick?(e: React.SyntheticEvent, newValue: number | string): void;
}
export default function TabComponent({ name, value, currentValue, handleClick }: TabComponentProps): JSX.Element;
export {};
