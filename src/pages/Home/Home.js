/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import listaProductos from '../../data';
import Carrito from '../../pages/Carrito';

function Home({ addToCart }) {
  const categories = Array.from(new Set(listaProductos.map(product => product.category)));
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    console.log(`Añadido al carrito: ${product.title} - Cantidad: ${quantity}`);
  };

  return (
    <div>
      <h1>Estudio Jurídico Malvina Aramayo</h1>
      <h2>Servicios Disponibles</h2>
      <div className="product-list">
        {listaProductos.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <p>Categoría: {product.category}</p>
            <button onClick={() => handleAddToCart(product, quantity)}>Comprar</button>
          </div>
        ))}
      </div>
     
      <Carrito />

      <Link to="/cart" className="cart-link">
        <span role="img" aria-label="Carrito de Compras">🛒</span> Ver Carrito
      </Link>

      <select onChange={(e) => console.log('Cambiar categoría', e.target.value)}>
        <option value="">Todas las Categorías</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Home;

