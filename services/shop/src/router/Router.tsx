import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';

const routers = [
    {
        path: '/',
        element: <App/>,
        children: []
    },
]

export const router = createBrowserRouter(routers);

export default routers;