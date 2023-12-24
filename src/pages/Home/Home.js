/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import listaProductos from '../../data';

function Home() {
  const categories = Array.from(new Set(listaProductos.map(product => product.category)));
  const [carrito, setCarrito] = useState([]);

  const addToCart = (product) => {
    setCarrito(prevCarrito => {
      const newCarrito = [...prevCarrito, product];
      console.log('Añadiendo al carrito:', product);
      console.log('Carrito actualizado:', newCarrito);
      return newCarrito;
    });
  };

  return (
    <div>
      <h1>Estudio Jurídico Malvina Aramayo</h1>
      <h2>Servicios Disponibles</h2>
      <div className="product-list">
        {listaProductos.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <p>Categoría: {product.category}</p>
            <button onClick={() => addToCart(product)}>Comprar</button>
           <Link to="/cart" className="cart-link">
  <span role="img" aria-label="Carrito de Compras">🛒</span> Ver Carrito ({carrito.length})
</Link>
          </div>
        ))}
      </div>

      <Link to="/cart" className="cart-link">
        <span role="img" aria-label="Carrito de Compras">🛒</span> Ver Carrito ({carrito.length})
      </Link>

      <select onChange={(e) => console.log('Cambiar categoría', e.target.value)}>
        <option value="">Todas las Categorías</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <Link to="/cart">
        <button>Ir al Carrito</button>
      </Link>
    </div>
  );
}

export default Home;