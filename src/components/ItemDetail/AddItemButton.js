/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const AddItemButton = ({ handleAddToCart }) => {
  return (
    <button onClick={handleAddToCart}>Agregar al Carrito</button>
  );
};

export default AddItemButton;