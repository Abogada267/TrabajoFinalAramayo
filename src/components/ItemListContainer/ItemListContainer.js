/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import listaProductos from "../../data.js";
import Home from "../../pages/Home/Home.js";
import NavBar from "../NavBar/NavBar.js";

function ItemListContainer() {
   const { categoryId } = useParams();
   const filteredProducts = listaProductos.filter(product => !categoryId || product.category === categoryId);
    
  return (
   <div>
<NavBar/>
        <Outlet>
           <Home />       
           </Outlet>
   <footer>ASISTENCIA JURÍDICA EN LÍNEA</footer>
</div>
   );
}

export default ItemListContainer;
