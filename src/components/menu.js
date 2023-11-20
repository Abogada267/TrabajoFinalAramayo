import React from 'react';
import { Link } from 'react-router-dom';
import './styles/menu.css';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
        <li>
          <Link to="/cuenta">Mi Cuenta</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;


