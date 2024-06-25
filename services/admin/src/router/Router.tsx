import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
import { LazyAbout } from '@/pages/about';

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback="Loading..."><LazyAbout/></Suspense>
            },
        ]
    },
]
export const router = createBrowserRouter(routes);

export default routes;