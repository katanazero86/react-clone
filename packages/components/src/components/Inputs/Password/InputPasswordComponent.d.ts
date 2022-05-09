/// <reference types="react" />
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
}: InputPasswordComponentProps): JSX.Element;
export {};
