import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
import { LazyShop } from '@/pages/shop';
import { shopRoutes } from '@packages/shared/src/routes/shop';

const routes = [
    {
        path: '/shop',
        element: <App/>,
        children: [
            {
                path: shopRoutes.main,
                element: <Suspense fallback="Loading..."><LazyShop/></Suspense>
            },
            {
                path: shopRoutes.example,
                element: <Suspense fallback="Loading...">
                    <div><h1>Show service example page</h1></div>
                </Suspense>
            },
        ]
    },
]
export const router = createBrowserRouter(routes);

export default routes;