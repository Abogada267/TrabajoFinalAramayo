/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import listaProductos from '../../data';
import './Productos.css';

function Productos() {
  return (
    <div>
      <h2>SERVICIOS</h2>
      <div className="galeria">
        {listaProductos.map((producto) => (
          <article key={producto.id}>
            <h4>{producto.title}</h4>
            <img src={producto.image} alt={producto.title} />
            <Link to="/cart" className="comprar-link">Ver detalles</Link>
          </article>
        ))}
         
      </div>
    </div>
  );
}

export default Productos;