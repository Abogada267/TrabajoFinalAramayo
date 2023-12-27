/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <label>
        Cantidad:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
