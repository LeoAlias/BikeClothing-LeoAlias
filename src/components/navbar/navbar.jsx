import './navbar.css';
import {CartWidget} from '../cartwidget/cartwidget'
import logo from '../../assets/images/logo/logo_race_rock2_adobespark.png'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='main-nav1'>
            <Link to ='/'>
                <div className='logo'><img src={logo} alt="logo" /></div>
            </Link>
            <ul className='nav1'>
                <NavLink to='/'><li> Inicio</li></NavLink>
                <NavLink to='/category/remeras'><li> Remeras</li></NavLink>
                <NavLink to='/category/camperas'><li> Camperas</li></NavLink>
                <NavLink to='/category/chalecos'><li> Chalecos</li></NavLink>
                <NavLink to='/cart'><li><CartWidget/></li></NavLink>
            </ul>
        </nav>
    )
}      