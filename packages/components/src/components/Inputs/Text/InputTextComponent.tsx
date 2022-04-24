import * as React from 'react';
import classes from './InputTextComponent.module.scss';
import clsx from 'clsx';
import InputError from '../Error/InputError';

interface InputTextComponentProps {
  placeholder?: string;
  value?: string;

  handleInput?(targetValue: string): void;

  error?: string;
}

export default function InputTextComponent({ placeholder, value, handleInput, error }: InputTextComponentProps) {
  const onInput = (e: React.SyntheticEvent) => {
    if (handleInput) handleInput((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <input
        className={clsx(classes.inputText)}
        type="text"
        placeholder={placeholder}
        onInput={onInput}
        value={value}
      />
      {error !== undefined && <InputError>{error}</InputError>}
    </>
  );
}
