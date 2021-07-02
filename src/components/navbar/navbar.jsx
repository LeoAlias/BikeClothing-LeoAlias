import './navbar.css';
import {CartWidget} from '../cartwidget/cartwidget'
import logo from '../../assets/images/logo/logo_race_rock2_adobespark.png'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='main-nav1'>
            <Link to ='/'>
                <p className='logo'><img src={logo} alt="logo" /></p>
            </Link>
            <ul className='nav1'>
                <NavLink to='/'><li> Inicio</li></NavLink>
                <NavLink to='/about'><li> Nosotros</li></NavLink>
                <NavLink to='/category/:categoryId'><li> Productos</li></NavLink>
                <NavLink to='/talles'><li> Talles</li></NavLink>
                <NavLink to='/materiales'><li> Materiales</li></NavLink>
                <NavLink to='/cart'><li><CartWidget/></li></NavLink>
            </ul>
        </nav>
    )
}      