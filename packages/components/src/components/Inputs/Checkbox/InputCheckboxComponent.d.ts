/// <reference types="react" />
interface InputCheckboxComponentProps {
  label?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange?(e: React.SyntheticEvent): void;
}
export default function InputCheckboxComponent({
  label,
  value,
  checked,
  disabled,
  handleChange,
}: InputCheckboxComponentProps): JSX.Element;
export {};
