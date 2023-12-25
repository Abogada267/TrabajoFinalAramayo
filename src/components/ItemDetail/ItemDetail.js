/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
      <Link to="/productos">Volver</Link>
    </div>
  );
};

export default ItemDetail;
