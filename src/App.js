/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from "./components/Cart/Cart.js";
import { CartProvider } from "./components/CartContext/CartContext.js";
import CartWidget from "./components/CartWidget/CartWidget.js";
import FormularioUsuario from "./components/FormularioUsuario/FormularioUsuario";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import Carrito from "./pages/Carrito.js";
import Error from "./pages/Error";
import Familia from "./pages/Familia/Familia.js";
import Galeria from "./pages/Galeria/Galeria.js";
import Home from "./pages/Home/Home.js";
import Productos from "./pages/Productos/Productos.js";
import Purchase from "./purchase.js";

function App() {
   const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product, quantity) => {
  
   setCarrito(prevCarrito => [...prevCarrito, { product, quantity }]);
  };
  
  return (
<CartProvider>
  <Router>
  <div>
  <CartWidget />
    <Routes>
<Route path="/" element={<ItemListContainer/>}>
<Route index element={<Home addToCart={addToCart} />} />
 <Route path="productos" element={<Productos />} />             
              <Route path="galeria" element={<Galeria addToCart={addToCart} />} />
        <Route path="Familia" element={<Familia addToCart={addToCart} />} />
  <Route path="productos" element={<Productos />} />
              <Route path="productos/:productoId" element={<ItemDetailContainer />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="purchase" element={<Purchase />} />
              <Route path="categories/:categoryId" element={<ItemListContainer />} />
              <Route path="*" element={<Error />} />
            </Route>
            <Route path="/cart" element={<Carrito />} />
            <Route path="/FormularioUsuario" element={<FormularioUsuario />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
