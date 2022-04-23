import { useState } from 'react';
import clsx from 'clsx';
import classes from './SigninComponent.module.scss';
import InputTextComponent from '../Inputs/Text/InputTextComponent';
import InputPasswordComponent from '../Inputs/Password/InputPasswordComponent';
import InputCheckboxComponent from '../Inputs/Checkbox/InputCheckboxComponent';

export default function SigninComponent() {
  const [userId, setUserId] = useState<string>('');
  const handleUserIdInput = (targetValue: string) => {
    if (targetValue === '') setUserId('');
    if (targetValue.length !== 0 && targetValue.trim() !== '') setUserId(targetValue.trim());
  };

  const [userPassword, setUserPassword] = useState<string>('');
  const handleUserPasswordInput = (targetValue: string) => {
    if (targetValue === '') setUserPassword('');
    if (targetValue.length !== 0 && targetValue.trim() !== '') setUserPassword(targetValue.trim());
  };

  return (
    <div className={clsx(classes.signin)}>
      <div>
        <h2>Login</h2>
        <div className={clsx(classes.inputBox)}>
          <InputTextComponent value={userId} handleInput={handleUserIdInput} placeholder="User ID" />
        </div>
        <div className={clsx(classes.inputBox)}>
          <InputPasswordComponent
            value={userPassword}
            handleInput={handleUserPasswordInput}
            placeholder="User Password"
          />
        </div>
        <div className={clsx(classes.inputBox, classes.inputBoxRight)}>
          <InputCheckboxComponent label="Remember me" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
