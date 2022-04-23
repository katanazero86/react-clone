import * as React from 'react';
import classes from './InputTextComponent.module.scss';

interface InputTextComponentProps {
  placeholder?: string;
  value?: string;
  handleInput?(targetValue: string): void;
}

export default function InputTextComponent({ placeholder, value, handleInput }: InputTextComponentProps) {
  const onInput = (e: React.SyntheticEvent) => {
    if (handleInput) handleInput((e.target as HTMLInputElement).value);
  };

  return <input className={classes.inputText} type="text" placeholder={placeholder} onInput={onInput} value={value} />;
}
