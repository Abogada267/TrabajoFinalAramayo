/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import listaProductos from './data';

function Purchase() {
  // Supongamos que tienes la información de la compra en algún estado o propiedades
  const purchaseDetails = {
    products: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 1 },
      // Puedes agregar más productos según sea necesario
    ],
    customerInfo: {
      name: 'Nombre del Cliente',
      email: 'cliente@example.com',
      // Agrega más información según sea necesario
    },
  };

  // Obtén los detalles completos de los productos usando los datos importados
  const productsWithDetails = purchaseDetails.products.map(item => {
    const product = listaProductos.find(p => p.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  const total = productsWithDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Detalles de la Compra</h2>

      {/* Lista de productos comprados */}
      <ul>
        {productsWithDetails.map(product => (
          <li key={product.id}>
            {product.title} - Cantidad: {product.quantity} - Precio: ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>

      {/* Información del cliente */}
      <div>
        <h3>Información del Cliente</h3>
        <p>Nombre: {purchaseDetails.customerInfo.name}</p>
        <p>Email: {purchaseDetails.customerInfo.email}</p>
        {/* Agrega más información del cliente según sea necesario */}
      </div>

      {/* Total de la compra */}
      <p>Total: ${total.toFixed(2)}</p>

      {/* Puedes agregar más contenido o funcionalidad según sea necesario */}
      
      {/* Enlace para ir a la página de compra final */}
      <Link to="/final-purchase">Ver Compra Final</Link>
    </div>
  );
}

export default Purchase;