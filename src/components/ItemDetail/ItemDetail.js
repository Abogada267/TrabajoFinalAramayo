/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddItemButton from "./AddItemButton";
import Description from "./Description";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <Description description={product.description} />
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddItemButton handleAddToCart={handleAddToCart} /> 
      <Link to="/productos">Volver</Link>
    </div>
  );
};

export default ItemDetail;

