import React from 'react';
import { createRoot } from 'react-dom';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <NavBar />
  </React.StrictMode>,
);
