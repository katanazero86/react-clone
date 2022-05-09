/// <reference types="react" />
interface ButtonBasicComponentProps {
  name?: string;
  fullWidth?: boolean;
  handleClick?(): void;
  flat?: boolean;
}
export default function ButtonBasicComponent({
  name,
  fullWidth,
  handleClick,
  flat,
}: ButtonBasicComponentProps): JSX.Element;
export {};
