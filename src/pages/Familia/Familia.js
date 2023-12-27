/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import listaProductos from '../../data';

function Familia({ addToCart }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (product) => {
    addToCart(product, quantity);
    console.log(`Añadido al carrito: ${product.title} - Cantidad: ${quantity}`);
        navigate('/cart');
  };

  return (
    <div>
      <h2>Derecho de Familia</h2>
      <div className="familia">
        {listaProductos.map(producto => (
          <article key={producto.id}>
            <h4>{producto.title}</h4>
            <img src={producto.image} alt={producto.title} />
            <button onClick={() => handleAddToCart(producto)}>Comprar</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Familia;