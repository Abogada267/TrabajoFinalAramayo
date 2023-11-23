import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App  () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="galeria" element={<div>galeria</div>} />
        <Route path="Productos" element={<div>Productos</div>}/>
         </Routes>
    </BrowserRouter>
      
            );
}

export default App;






