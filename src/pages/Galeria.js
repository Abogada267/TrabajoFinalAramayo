import { Link } from "react-router-dom";
import listaDerechoLaboral from "../data1";

function Galeria() {
  return (
    <div>
      <h1> LABORAL DERECHO</h1>
      <div className="galeria">
        {listaDerechoLaboral.map((producto) => (
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

export default Galeria;
