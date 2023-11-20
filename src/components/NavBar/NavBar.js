import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navBar}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
