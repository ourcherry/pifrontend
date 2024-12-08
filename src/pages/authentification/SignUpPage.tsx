import { Icons } from '@/assets/icons/Icons';
import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SignUp } from '@/features/authentification/components';

const SignUpPage = (): JSX.Element => {
  return (
    <div className='container relative h-screen flex-col items-center justify-center grid '>
      <Card className='mx-auto max-w-lg'>
        <CardHeader>
          <div>
            <Icons.hos className='w-16 float-right' />
          </div>
          <CardTitle className='text-xl'>Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUp />
          <div className='mt-8 mb-1 text-center text-sm'>
            Already have an account?{' '}
            <Link to='/auth/login' className='underline'>
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
