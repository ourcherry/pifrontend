import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Separator,
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components';

import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <>
            {/*
          <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          */}
            <Outlet />
            {/*
          </div>
      */}
        </>
    );
};
