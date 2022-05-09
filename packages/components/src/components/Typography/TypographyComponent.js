import { jsx as _jsx } from 'react/jsx-runtime';
import * as React from 'react';
import classes from './TypographyComponent.module.scss';
import clsx from 'clsx';
var VariantEnum;
(function (VariantEnum) {
  VariantEnum['h1'] = 'h1';
  VariantEnum['h2'] = 'h2';
  VariantEnum['h3'] = 'h3';
  VariantEnum['h4'] = 'h4';
  VariantEnum['h5'] = 'h5';
  VariantEnum['h6'] = 'h6';
})(VariantEnum || (VariantEnum = {}));
export default function TypographyComponent({ variant = 'h1', children }) {
  return _jsx('div', { className: clsx(classes.pageTitle), children: React.createElement(variant, null, children) });
}
