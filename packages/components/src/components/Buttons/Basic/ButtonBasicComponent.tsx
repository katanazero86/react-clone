import classes from './ButtonBasicComponent.module.scss';
import clsx from 'clsx';

interface ButtonBasicComponentProps {
  name?: string;
  fullWidth?: boolean;
}

export default function ButtonBasicComponent({ name, fullWidth }: ButtonBasicComponentProps) {
  return (
    <button className={clsx(classes.buttonBasic, fullWidth && classes.buttonBasicFullWidth)} type="button">
      {name}
    </button>
  );
}
