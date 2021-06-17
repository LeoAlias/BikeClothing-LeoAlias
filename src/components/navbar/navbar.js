import './navbar.css';
import {CartWidget} from '../cartwidget/cartwidget'

export const NavBar = () => {
    return (
        <nav className='main-nav1'>
            <ul className='nav1'>
                <li><a href="index">Inicio</a></li>
                <li><a href="about">Nosotros</a></li>
                <li><a href="products">Productos</a></li>
                <li><a href="talles">Talles</a></li>
                <li><a href="materiales">Materiales</a></li>
                <li><a href="Carrito"><CartWidget /></a></li>
            </ul>
        </nav>
    )
}      