/// <reference types="react" />
interface InputTextComponentProps {
  placeholder?: string;
  value?: string;
  handleInput?(targetValue: string): void;
  error?: string;
}
export default function InputTextComponent({
  placeholder,
  value,
  handleInput,
  error,
}: InputTextComponentProps): JSX.Element;
export {};
