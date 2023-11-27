import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
  <Link to="/">INICIO</Link>
  <Link to="galeria">DERECHO LABORAL</Link>
      <Link to="productos">SERVICIOS</Link>
    </nav>
  );
}

export default NavBar;

