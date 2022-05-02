import classes from './ButtonBasicComponent.module.scss';
import clsx from 'clsx';

interface ButtonBasicComponentProps {
  name?: string;
  fullWidth?: boolean;
  handleClick?(): void;
  flat?: boolean;
}

export default function ButtonBasicComponent({
  name = '',
  fullWidth = false,
  handleClick,
  flat = false,
}: ButtonBasicComponentProps) {
  const onClick = () => {
    if (handleClick) handleClick();
  };

  return (
    <button
      className={clsx(classes.buttonBasic, fullWidth && classes.buttonBasicFullWidth, flat && classes.buttonBasicFlat)}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
