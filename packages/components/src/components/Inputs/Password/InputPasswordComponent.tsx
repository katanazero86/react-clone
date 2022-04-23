import * as React from 'react';
import classes from './InputPasswordComponent.module.scss';

interface InputPasswordComponentProps {
  placeholder?: string;
  value?: string;
  handleInput?(targetValue: string): void;
}

export default function InputPasswordComponent({ placeholder, value, handleInput }: InputPasswordComponentProps) {
  const onInput = (e: React.SyntheticEvent) => {
    if (handleInput) handleInput((e.target as HTMLInputElement).value);
  };

  return (
    <input
      className={classes.inputPassword}
      type="password"
      placeholder={placeholder}
      onInput={onInput}
      value={value}
    />
  );
}
