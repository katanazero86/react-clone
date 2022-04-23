import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../src/contexts/AuthContext';

interface RequireAuthProps {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/signin" />;
  }
  return <>children</>;
}
