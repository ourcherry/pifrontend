import { useRoutes } from 'react-router-dom';

import { AuthRoutes } from './AuthRoutes';
import { MainRoutes } from './MainRoutes';

function Router() {
  return useRoutes([AuthRoutes, MainRoutes]);
}

export default Router;
