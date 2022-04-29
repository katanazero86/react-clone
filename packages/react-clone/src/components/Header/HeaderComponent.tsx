import { useRecoilValue } from 'recoil';
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
} from '@zero86/components';
import imgUrl from '../../assets/imgs/img-user-example.png';

export default function HeaderComponent() {
  const authAtom = useRecoilValue(auth);

  const [open, setOpen, dropdownRef] = useDetectOutsideClick();

  return (
    <AppBarComponent>
      <div className={clsx(classes.menu)}>
        <ButtonIconComponent width={46} height={46}>
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
          <DropdownItemComponent>Logout</DropdownItemComponent>
        </DropdownItemsComponent>
      </DropdownComponent>
    </AppBarComponent>
  );
}