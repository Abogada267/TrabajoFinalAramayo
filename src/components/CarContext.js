/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    totalItems,  
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

function Cart() {
  const { cartItems } = useCustomCart();

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

      <Checkout/>
    </div>
  );
}

export default Cart;