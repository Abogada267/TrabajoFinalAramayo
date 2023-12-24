/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Carrito({ carrito }) {
  const navigate = useNavigate();

  const volverAHome = () => {
    navigate('/');
  };
  
  const totalCarrito = carrito.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map(item => (
          <li key={item.id}>{item.title} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
      <p>Total: ${totalCarrito}</p>
      <button onClick={volverAHome}>Volver a Home</button>
    </div>
  );
}

export default Carrito;