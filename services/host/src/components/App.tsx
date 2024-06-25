import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { adminRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutes } from '@packages/shared/src/routes/shop';

export const App = () => {
    return (
        <div>
            <h1>HOST</h1>
            <Link to={'/'}>Host container</Link>
            <br/>
            <Link to={adminRoutes.about}>ABOUT Project Main page</Link>
            <br/>
            <Link to={shopRoutes.main}>SHOP Project Main page</Link>
            <br/>
            <Link to={shopRoutes.example}>SHOP Project Example page</Link>
            <br/>
            <button className={classes.button}>Click me</button>
            <Outlet />
        </div>
    )
}