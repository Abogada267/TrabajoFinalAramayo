import { Link, useParams } from "react-router-dom";
import listaProductos from "../data";
import listaDerechoLaboral from "../data1";

function ItemDetailContainer() {
  console.log(useParams());
  const { productId } = useParams();
  const producto = listaProductos.find((producto) => producto.id === parseInt(productId));
  const servicioJuridico = listaDerechoLaboral.find((servicio) => servicio.id === parseInt(productId));

  if (!producto && !servicioJuridico) {
    return <div>Elemento no encontrado</div>;
  }

  const { image, title, price } = producto || servicioJuridico;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h2>{price}</h2>
      <Link to="/productos">Volver</Link>
    </div>
  );
}

export default ItemDetailContainer;
