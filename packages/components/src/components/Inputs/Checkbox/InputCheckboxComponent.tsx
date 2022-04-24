import classes from './InputCheckboxComponent.module.scss';
import clsx from 'clsx';

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
}: InputCheckboxComponentProps) {
  const onChange = (e: React.SyntheticEvent) => {
    if (handleChange) handleChange(e);
  };

  return (
    <div className={clsx(classes.inputCheckbox)}>
      <label>
        <input type="checkbox" value={value} checked={checked} disabled={disabled} onChange={onChange} />
        <span className={clsx(classes.check)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
        </span>
        <span className={clsx(classes.checkboxLabel)}>{label}</span>
      </label>
    </div>
  );
}
