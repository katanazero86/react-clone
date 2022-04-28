import { Outlet } from 'react-router-dom';
import HeaderComponent from '../Header/HeaderComponent';

export default function DefaultLayoutComponent() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}
