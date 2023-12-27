/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from "react-router-dom";

const ItemList = ({ productos, agregarAlCarrito }) => {
  return (
    <div>
      <h3>Lista de Productos</h3>
<ul>{productos.map((producto) => (
<li key={producto.id}>
 <img src={producto.image} alt={producto.title} />
    <h3>{producto.title}</h3>
   <p>{producto.descripcion}</p> 
    <p>Precio:${producto.price.toFixed(2)}</p>
    <Link to={`/productos/${producto.id}`}>Ver Detalles</Link>
    <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;