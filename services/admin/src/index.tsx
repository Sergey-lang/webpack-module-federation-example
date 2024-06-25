import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from '@/pages/about';
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
                path: '/about',
                element: <Suspense fallback="Loading..."><LazyAbout/></Suspense>
            },
        ]
    },
]);

container.render(<RouterProvider router={router}/>)