import { RouteObject } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/home-page';

const ErrorComponent = () => <div>not found 404</div>;

export const MainRoutes: RouteObject = {
    path: '/',
    element: <MainLayout />,
    children: [
        { path: '*', element: <ErrorComponent /> },
        {
            path: '/',
            element: <HomePage />,
        },
        { path: '/home', element: <HomePage /> },
    ],
};
