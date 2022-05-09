import * as React from 'react';
declare enum VariantEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}
interface TypographyComponentProps {
  variant: keyof typeof VariantEnum;
  children?: string | React.ReactElement;
}
export default function TypographyComponent({ variant, children }: TypographyComponentProps): JSX.Element;
export {};
