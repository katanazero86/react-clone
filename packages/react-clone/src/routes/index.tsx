import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import RequireAuth from './RequireAuth';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Signin = React.lazy(() => import('../pages/Signin/Signin'));
const Signup = React.lazy(() => import('../pages/Signup/Signup'));

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);

  const signin = (targetUser: any, callback: VoidFunction) => {
    setUser({
      me: {
        id: targetUser.id,
      },
      token: targetUser.token,
    });
    if (callback) callback();
  };

  const signout = (callback: VoidFunction) => {
    setUser(null);
    if (callback) callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
