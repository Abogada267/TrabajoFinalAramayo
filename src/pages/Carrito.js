/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Carrito({ carrito }) {
  const navigate = useNavigate();

  const volverAHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={volverAHome}>Volver a Home</button>
    </div>
  );
}

export default Carrito;