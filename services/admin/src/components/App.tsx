import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <h1>Admin Service</h1>
            <Outlet />
        </div>
    )
}