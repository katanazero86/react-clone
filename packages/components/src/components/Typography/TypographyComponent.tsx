import * as React from 'react';
import classes from './TypographyComponent.module.scss';
import clsx from 'clsx';

enum VariantEnum {
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

export default function TypographyComponent({ variant = 'h1', children }: TypographyComponentProps) {
  return <div className={clsx(classes.pageTitle)}>{React.createElement(variant, null, children)}</div>;
}
