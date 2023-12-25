/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <FaShoppingCart />
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </Link>
    </div>
  );
}

export default CartWidget;