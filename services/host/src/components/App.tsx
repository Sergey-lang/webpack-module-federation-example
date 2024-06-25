import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <h1>HOST</h1>
            <Link to={'/'}>Host container</Link>
            <br/>
            <Link to={'/about'}>ABOUT Project</Link>
            <br/>
            <Link to={'/shop'}>SHOP Project</Link>
            <br/>
            <button className={classes.button}>Click me</button>
            <Outlet />
        </div>
    )
}