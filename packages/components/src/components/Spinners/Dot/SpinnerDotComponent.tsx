import classes from './SpinnerDotComponent.module.scss';
import clsx from 'clsx';

export default function SpinnerDotComponent() {
  return (
    <div className={clsx(classes.spinner)}>
      <div className={clsx(classes.loaderSpin)}>
        <span className={clsx(classes.dot, classes.dotSpin)}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </div>
  );
}
