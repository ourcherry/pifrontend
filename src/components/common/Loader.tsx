import { Suspense } from 'react';
import { Icons } from '@/assets/icons/Icons';

const Loader = (Component: React.ComponentType<any>) => (props: object) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);

const Loading = () => <Icons.spinner className='mr-2 h-4 w-4' />;

export default Loader;
