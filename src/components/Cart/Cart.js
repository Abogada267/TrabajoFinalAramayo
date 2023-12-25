/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useCart } from '../CartContext/CartContext';
import Checkout from '../Checkout/Checkout';

function Cart() {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
        </div>
      )}

      <Checkout />
    </div>
  );
}

export default Cart;