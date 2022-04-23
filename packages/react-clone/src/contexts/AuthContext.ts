import * as React from 'react';

interface AuthContextType {
  user: any;
  signin: (targetUser: any, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
  return React.useContext(AuthContext);
}
