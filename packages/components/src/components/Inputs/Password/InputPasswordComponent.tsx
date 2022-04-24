import * as React from 'react';
import classes from './InputPasswordComponent.module.scss';
import clsx from 'clsx';
import InputError from '../Error/InputError';

interface InputPasswordComponentProps {
  placeholder?: string;
  value?: string;

  handleInput?(targetValue: string): void;

  error?: string;
}

export default function InputPasswordComponent({
  placeholder,
  value,
  handleInput,
  error,
}: InputPasswordComponentProps) {
  const onInput = (e: React.SyntheticEvent) => {
    if (handleInput) handleInput((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <input
        className={clsx(classes.inputPassword)}
        type="password"
        placeholder={placeholder}
        onInput={onInput}
        value={value}
      />
      {error !== undefined && <InputError>{error}</InputError>}
    </>
  );
}
