import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import { SpinnerDotComponent } from '@zero86/components';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Signin = React.lazy(() => import('../pages/Signin/Signin'));
const Signup = React.lazy(() => import('../pages/Signup/Signup'));

export const Router = () => {
  return (
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
        <Route
          path="signin"
          element={
            <React.Suspense fallback={<SpinnerDotComponent />}>
              <Signin />
            </React.Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <React.Suspense fallback={<SpinnerDotComponent />}>
              <Signup />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
