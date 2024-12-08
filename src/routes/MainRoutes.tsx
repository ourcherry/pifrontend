import { RouteObject } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';

const ErrorComponent = () => <div>not found 404</div>;

export const MainRoutes: RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '*', element: <ErrorComponent /> },
    {
      path: '/',
      element: <HomePage />,
    } /* TODO : 미인증시 로그인 페이지 이동 */,
    { path: '/home', element: <HomePage /> },
  ],
};
