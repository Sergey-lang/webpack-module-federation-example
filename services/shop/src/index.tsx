import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyShop } from '@/pages/shop';
import { Suspense } from 'react';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root not found')
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/shop',
                element: <Suspense fallback="Loading..."><LazyShop/></Suspense>
            },
        ]
    },
]);

container.render(<RouterProvider router={router}/>)