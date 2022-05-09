import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import DefaultLayoutComponent from '../components/Layouts/DefaultLayoutComponent';
import { SpinnerDotComponent } from '@zero86/components';

const Home = React.lazy(() => import('../pages/Home/Home'));
const About = React.lazy(() => import('../pages/About/About'));
const Signin = React.lazy(() => import('../pages/Signin/Signin'));
const Signup = React.lazy(() => import('../pages/Signup/Signup'));

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayoutComponent />}>
        <Route
          index
          element={
            <RequireAuth>
              <React.Suspense fallback={<SpinnerDotComponent />}>
                <Home />
              </React.Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="about"
          element={
            <RequireAuth>
              <React.Suspense fallback={<SpinnerDotComponent />}>
                <About />
              </React.Suspense>
            </RequireAuth>
          }
        />
      </Route>
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
    </Routes>
  );
};
