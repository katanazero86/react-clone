import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { auth } from '../../store/atoms/auth';
import classes from './Header.module.scss';
import clsx from 'clsx';
import { AppBarComponent, ButtonIconComponent, UserInfoComponent } from '@zero86/components';
import imgUrl from '../../assets/imgs/img-user-example.png';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={clsx(classes.menu)}>
        <ButtonIconComponent width={46} height={46} handleClick={() => setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </ButtonIconComponent>
      </div>
      {open && (
        <ul className={clsx(classes.menuList)} role="navigation">
          <li>My Profile</li>
          <li>Logout</li>
        </ul>
      )}
    </>
  );
};

export default function HeaderComponent() {
  const authAtom = useRecoilValue(auth);

  return (
    <AppBarComponent>
      <div className={clsx(classes.drawer)}>
        <ButtonIconComponent width={46} height={46}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </ButtonIconComponent>
      </div>
      <p className={clsx(classes.title)}>React-clone</p>
      <UserInfoComponent imgUrl={imgUrl} user={authAtom.me} />
      <Menu />
    </AppBarComponent>
  );
}
