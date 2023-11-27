import { Link } from "react-router-dom";
import listaProductos from '../data';
import './Productos.css';

function Productos() {
  console.log(listaProductos);

  return (
    <div>
      <h2>PRODUCTOS</h2>
      <div className="galeria">
        {listaProductos.map((producto) => (
          <article key={producto.id}>
            <h4>{producto.title}</h4>
            <img src={producto.image} alt={producto.title} />
            <Link to={`/productos/${producto.id}`}>Detalle</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Productos;

