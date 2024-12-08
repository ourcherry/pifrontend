import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components';
import { Icons } from '@/assets/icons/Icons';

export const NavLogo = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size='lg'
          className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
          <div className='flex aspect-square size-8 items-center justify-center bg-sidebar-secondary rounded-lg text-sidebar-primary-foreground'>
            <Icons.hos className='size-6' />
          </div>
          <div className='grid flex-1 text-left text-sm leading-tight'>
            <span className='truncate font-semibold'>HMM OCEAN SERVICE</span>
            <span className='truncate text-xs'>
              World Class Ship Management
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
