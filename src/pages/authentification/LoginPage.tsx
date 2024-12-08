import { Icons } from '@/assets/icons/Icons';
import { Login } from '@/features/authentification/components';
import image from '@/assets/image/photos/bg26.jpg';

export const LoginPage = (): JSX.Element => {
  return (
    <>
      <div className='container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        {/* IMAGE */}
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900'>
            <img
              src={image}
              alt='login-image'
              className='object-cover h-full'
            />
          </div>
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <Icons.ship className='mr-2 h-6 w-6' />
            HOS PORTAL
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <footer className='text-sm text-center font-medium'>
                HMM OCEAN SEVICE
              </footer>
            </blockquote>
          </div>
        </div>
        {/* LOGIN */}
        <div className='lg:p-8 block'>
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
