import classes from './ButtonBasicComponent.module.scss';
import clsx from 'clsx';

interface ButtonBasicComponentProps {
  name?: string;
  fullWidth?: boolean;
  handleClick?(): void;
}

export default function ButtonBasicComponent({ name, fullWidth, handleClick }: ButtonBasicComponentProps) {
  const onClick = () => {
    if (handleClick) handleClick();
  };

  return (
    <button
      className={clsx(classes.buttonBasic, fullWidth && classes.buttonBasicFullWidth)}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
