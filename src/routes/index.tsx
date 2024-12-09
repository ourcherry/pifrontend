import { useRoutes } from 'react-router-dom';

import { MainRoutes } from './MainRoutes';

function Router() {
    return useRoutes([MainRoutes]);
}

export default Router;
