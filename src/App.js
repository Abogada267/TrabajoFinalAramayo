import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App  () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="galeria" element={<div>Home</div>}/>
      </Routes>
    </BrowserRouter>
      
            );
}

export default App;






