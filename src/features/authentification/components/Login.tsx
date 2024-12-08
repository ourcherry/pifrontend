import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';

import { Icons } from '@/assets/icons/Icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Login = ({ className, ...props }: LoginProps): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/home');
    }, 1000); // 1s
  }

  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]',
        className
      )}
      {...props}>
      <div className='grid gap-2 text-center'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <p className='text-sm text-muted-foreground'>
          Welcome to visit HMM OCEAN SEVICE Portal 😊
        </p>
      </div>
      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='id'>📧 ID</Label>
          <Input id='id' type='id' placeholder='guest@hos21.com' required />
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center'>
            <Label htmlFor='password'>🔑 Password</Label>
            <Link to='' className='ml-auto inline-block text-sm underline'>
              Forgot your password?
            </Link>
          </div>
          <Input id='password' type='password' required />
        </div>
        <Button type='submit' className='w-full' onClick={onSubmit}>
          {isLoading ? <Icons.spinner className='mr-2 h-4 w-4' /> : `Login`}
        </Button>
      </div>
      <div className='mt-4 text-center text-sm'>
        Don&apos;t have an account?{' '}
        <Link to='/auth/signup' className='underline'>
          Sign up
        </Link>
      </div>
    </div>
  );
};
