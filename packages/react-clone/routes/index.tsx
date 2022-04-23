import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../src/contexts/AuthContext';
import RequireAuth from './RequireAuth';

const Home = React.lazy(() => import('../src/pages/Home/Home'));
const Signin = React.lazy(() => import('../src/pages/Signin/Signin'));
const Signup = React.lazy(() => import('../src/pages/Signup/Signup'));

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);

  const signin = (newUser: any, callback: VoidFunction) => {
    setUser({
      me: {
        id: newUser.id,
      },
      token: newUser.token,
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
