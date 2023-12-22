/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ItemList = ({ productos, agregarAlCarrito }) => {
  return (
    <div>
      <h3>Lista de Productos</h3>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <img src={producto.image} alt={producto.name} />
            <h4>{producto.name}</h4>
            <p>Precio: ${producto.price}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;