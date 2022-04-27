import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { auth } from '../store/atoms/auth';

interface RequireAuthProps {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const authAtom = useRecoilValue(auth);
  if (authAtom.me === undefined && authAtom.token === undefined) return <Navigate to="/signin" />;
  return <>{children}</>;
}
