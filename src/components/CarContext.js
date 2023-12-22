/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const getTotalItems = () => cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, totalItems: getTotalItems() }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe utilizarse dentro de un CartProvider');
  }
  return context;
};

export default CartContext;