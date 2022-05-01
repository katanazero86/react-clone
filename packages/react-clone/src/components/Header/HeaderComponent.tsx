import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { auth } from '../../store/atoms/auth';
import classes from './Header.module.scss';
import clsx from 'clsx';
import {
  AppBarComponent,
  ButtonIconComponent,
  DropdownComponent,
  DropdownItemComponent,
  DropdownItemsComponent,
  MenuIconComponent,
  MoreVerticalIconComponent,
  UserInfoComponent,
  useDetectOutsideClick,
  DrawerComponent,
} from '@zero86/components';
import imgUrl from '../../assets/imgs/img-user-example.png';
import { useState } from 'react';

export default function HeaderComponent() {
  const navigate = useNavigate();
  const [authAtom, setAuthAtom] = useRecoilState(auth);
  const [open, setOpen, dropdownRef] = useDetectOutsideClick();

  const logout = () => {
    localStorage.removeItem('user');
    setAuthAtom({
      me: {
        userName: '',
        userId: '',
      },
      token: '',
    });
    navigate('/signin');
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBarComponent>
      <DrawerComponent open={drawerOpen} close={drawerClose} items={drawerItems} />
      <div className={clsx(classes.menu)}>
        <ButtonIconComponent width={46} height={46} handleClick={() => setDrawerOpen(!drawerOpen)}>
          <MenuIconComponent width={46} height={46} />
        </ButtonIconComponent>
      </div>
      <p className={clsx(classes.title)}>React-clone</p>
      <UserInfoComponent imgUrl={imgUrl} user={authAtom.me} />
      <DropdownComponent dropdownRef={dropdownRef}>
        <ButtonIconComponent width={46} height={46} handleClick={() => setOpen(!open)}>
          <MoreVerticalIconComponent width={46} height={46} />
        </ButtonIconComponent>
        <DropdownItemsComponent open={open} align="right">
          <DropdownItemComponent>My Profile</DropdownItemComponent>
          <DropdownItemComponent handleClick={logout}>Logout</DropdownItemComponent>
        </DropdownItemsComponent>
      </DropdownComponent>
    </AppBarComponent>
  );
}

const drawerItems = [
  { label: 'Dashboard', isExpend: false },
  { label: 'About', isExpend: false },
  { label: 'Test', isExpend: true, expendItems: [{ label: 'Child1' }, { label: 'Child2' }] },
];
