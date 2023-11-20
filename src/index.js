import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Button from './components/Button/Button';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar';

createRoot(document.getElementById('root')).render(  // Actualiza createRoot
    <React.StrictMode>
        <Button />
        <NavBar />
        <Header />
        <App />
        
    </React.StrictMode>,
);
