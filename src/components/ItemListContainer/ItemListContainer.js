/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import listaProductos from "../../data.js";
import Home from "../../pages/Home/Home.js";
import { useCart } from '../CartContext/CartContext';
import NavBar from "../NavBar/NavBar.js";

function ItemListContainer() {
  const { categoryId } = useParams();
  const { cartItems, addToCart } = useCart();  

  const filteredProducts = listaProductos.filter(product => !categoryId || product.category === categoryId);
  
  const categories = Array.from(new Set(listaProductos.map(product => product.category)));

  return (
    <div>
      <NavBar categories={categories} />
      <Outlet>
        <Home products={filteredProducts} addToCart={addToCart} />
      </Outlet>
      <footer>ASISTENCIA JURÍDICA EN LÍNEA</footer>
    </div>
  );


  }


export default ItemListContainer;
