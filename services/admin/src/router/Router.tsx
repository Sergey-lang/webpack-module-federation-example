import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
import { LazyAbout } from '@/pages/about';
import { adminRoutes } from '@packages/shared/src/routes/admin';

const routes = [
    {
        path: '/admin',
        element: <App/>,
        children: [
            {
                path: adminRoutes.about,
                element: <Suspense fallback="Loading..."><LazyAbout/></Suspense>
            },
        ]
    },
]
export const router = createBrowserRouter(routes);

export default routes;