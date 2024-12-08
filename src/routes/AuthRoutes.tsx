import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Loader from '@/components/common/Loader';
import { MinimalLayout } from '@/layouts/MinimalLayout';

const LoginPage = Loader(
  lazy(() => import('@/pages/authentification/LoginPage'))
);
const SignUpPage = Loader(
  lazy(() => import('@/pages/authentification/SignUpPage'))
);

export const AuthRoutes: RouteObject = {
  path: 'auth',
  element: <MinimalLayout />,
  children: [
    { path: 'login', element: <LoginPage /> },
    { path: 'signup', element: <SignUpPage /> },
  ],
};
