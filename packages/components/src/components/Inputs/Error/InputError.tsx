import * as React from 'react';
import classes from './InputError.module.scss';
import clsx from 'clsx';

interface InputErrorProps {
  children: React.ReactNode;
}

export default function InputError({ children }: InputErrorProps) {
  return <p className={clsx(classes.inputError)}>{children}</p>;
}
