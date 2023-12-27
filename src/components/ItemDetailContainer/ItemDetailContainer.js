/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import listaProductos from "../../data";
import listaDerechoLaboral from "../../data1";

function ItemDetailContainer() {
  const { productId } = useParams();

  const producto = listaProductos.find((producto) => producto.id === parseInt(productId));
  const servicioJuridico = listaDerechoLaboral.find((servicio) => servicio.id === parseInt(productId));

  if (!producto && !servicioJuridico) {
   
    return <div>Elemento no encontrado</div>;
  }

  const item = producto || servicioJuridico;

  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <h2>{item.price}</h2>
      <Link to="/productos">Volver</Link>
      <ItemDetail product={item} />
    </div>
  );
}

export default ItemDetailContainer;