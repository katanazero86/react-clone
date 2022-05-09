import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { auth } from '../../store/atoms/auth';
import classes from './SignupComponent.module.scss';
import clsx from 'clsx';
import {
  InputTextComponent,
  InputPasswordComponent,
  ButtonBasicComponent,
  ButtonIconComponent,
  GoogleIconComponent,
  FacebookIconComponent,
  AppleIconComponent,
  SpinnerCircleComponent,
} from '@zero86/components';
import { useCreateUserMutation } from '../../mutations/useAuthMutaion';

export default function SignupComponent() {
  const setAuthAtom = useSetRecoilState(auth);
  const navigate = useNavigate();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [userName, setUserName] = useState<string>('');
  const handleUserNameInput = (targetValue: string) => {
    if (targetValue === '') setUserName('');
    if (targetValue.length !== 0 && targetValue.trim() !== '') setUserName(targetValue.trim());
  };

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

  const { isLoading, mutateAsync } = useCreateUserMutation();

  const handleSignupClick = async () => {
    const validation: { [key: string]: string } = {};
    if (userName.trim() === '') validation['userName'] = 'Please Input User Name';
    if (userId.trim() === '') validation['userId'] = 'Please Input User ID';
    if (userPassword.trim() === '') validation['userPassword'] = 'Please Input User Password';

    if (validation['userName'] || validation['userId'] || validation['userPassword']) {
      setErrors(validation);
      return false;
    }

    const result = await mutateAsync({ userName, userId, userPassword });
    localStorage.setItem('user', JSON.stringify(result));
    setAuthAtom(result);
    navigate('/', { replace: true });
  };

  if (isLoading) return <SpinnerCircleComponent />;

  return (
    <div className={clsx(classes.signup)}>
      <div className={clsx(classes.left)}>
        <div className={clsx(classes.signinForm)}>
          <h2>React-clone Signup</h2>
          <div className={clsx(classes.inputBox)}>
            <InputTextComponent
              value={userName}
              handleInput={handleUserNameInput}
              placeholder="User Name"
              error={errors['userName']}
            />
          </div>
          <div className={clsx(classes.inputBox)}>
            <InputTextComponent
              value={userId}
              handleInput={handleUserIdInput}
              placeholder="User ID"
              error={errors['userId']}
            />
          </div>
          <div className={clsx(classes.inputBox)}>
            <InputPasswordComponent
              value={userPassword}
              handleInput={handleUserPasswordInput}
              placeholder="User Password"
              error={errors['userPassword']}
            />
          </div>
          <ButtonBasicComponent name="Signup" fullWidth handleClick={handleSignupClick} />
          <div className={clsx(classes.signupInfo)}>
            <span>Already have account?</span>
            <span>
              <Link to="/signin">Login</Link>
            </span>
          </div>
        </div>
        <div className={clsx(classes.social)}>
          <span>Or Login With</span>
          <span>
            <ButtonIconComponent>
              <GoogleIconComponent />
            </ButtonIconComponent>
            <ButtonIconComponent>
              <FacebookIconComponent />
            </ButtonIconComponent>
            <ButtonIconComponent>
              <AppleIconComponent />
            </ButtonIconComponent>
          </span>
        </div>
      </div>
    </div>
  );
}
