/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <nav>
      <Link to="/">INICIO</Link>
      <Link to="/galeria">DERECHO LABORAL</Link>
      <Link to="/productos">SERVICIOS</Link>

      {/* Ejemplo de integración de CartWidget */}
      <CartWidget />
    </nav>
  );
}

export default NavBar;