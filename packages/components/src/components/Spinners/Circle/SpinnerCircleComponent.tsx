import classes from './SpinnerCircleComponent.module.scss';
import clsx from 'clsx';

export default function SpinnerCircleComponent() {
  return (
    <div className={clsx(classes.spinnerCircle)}>
      <div className={clsx(classes.circle)}></div>
    </div>
  );
}
