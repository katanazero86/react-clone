import * as React from 'react';
interface SelectItemComponentProps {
  children?: string | React.ReactElement;
  value?: string | number;
  selectedValue?: string | number;
}
export default function SelectItemComponent({ children, value, selectedValue }: SelectItemComponentProps): JSX.Element;
export {};
