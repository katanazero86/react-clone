interface ButtonBasicComponentProps {
  name?: string;
}

export default function ButtonBasicComponent({ name }: ButtonBasicComponentProps) {
  return <button>{name}</button>;
}
