/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useParams } from "react-router-dom";
import listaProductos from "../data";

function Producto() {
    const { productoId } = useParams();
    console.log({ productoId }); 

  const producto = listaProductos.find((producto) => producto.Id == productoId);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const { image, title, price } = producto;

  return (
    <div>
      <img src={image} alt={title}/>
      <h2>{title}</h2>
      <h2>{price}</h2>

      <Link to="/productos">Volver</Link>
    </div>
  );
}

export default Producto;

