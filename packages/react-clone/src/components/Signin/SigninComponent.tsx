import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { auth } from '../../store/atoms/auth';
import clsx from 'clsx';
import classes from './SigninComponent.module.scss';
import {
  InputTextComponent,
  InputPasswordComponent,
  InputCheckboxComponent,
  ButtonBasicComponent,
  ButtonIconComponent,
  GoogleIconComponent,
  FacebookIconComponent,
  AppleIconComponent,
} from '@zero86/components';
import { useLoginQuery } from '../../queries/useAuthQuery';

export default function SigninComponent() {
  const [authAtom, setAuthAtom] = useRecoilState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authAtom.me && authAtom.token) navigate('/', { replace: true });
  }, [authAtom]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const [userRememberMe, setUserRememberMe] = useState<boolean>(false);
  const handleRememberMeChange = (e: React.SyntheticEvent) => {
    setUserRememberMe((e.target as HTMLInputElement).checked);
  };

  const handleLoginClick = () => {
    const validation: { [key: string]: string } = {};
    if (userId.trim() === '') validation['userId'] = 'Please Input User ID';
    if (userPassword.trim() === '') validation['userPassword'] = 'Please Input User Password';

    if (validation['userId'] || validation['userPassword']) {
      setErrors(validation);
      return false;
    }

    refetch();
  };

  const { data, isLoading, refetch } = useLoginQuery({ userId, userPassword });

  useEffect(() => {
    if (data && data.me && data.token) {
      localStorage.setItem('user', JSON.stringify(data));
      setAuthAtom(data);
    }
  }, [data]);

  if (isLoading) return <div>loading..</div>;

  return (
    <div className={clsx(classes.signin)}>
      <div className={clsx(classes.left)}>
        <div className={clsx(classes.signinForm)}>
          <h2>React-clone Login</h2>
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
          <div className={clsx(classes.inputBox, classes.inputBoxRight)}>
            <InputCheckboxComponent label="Remember me" handleChange={handleRememberMeChange} />
          </div>
          <ButtonBasicComponent name="Login" fullWidth handleClick={handleLoginClick} />
          <div className={clsx(classes.signupInfo)}>
            <span>Don{"'"}t have account?</span>
            <span>
              <Link to="/signup">Signup</Link>
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
      <div className={clsx(classes.right)}>
        <h2>Welcome to React-clone!</h2>
        <p>Dashboard 클론코딩입니다.(react + ts + scss)</p>
      </div>
    </div>
  );
}
