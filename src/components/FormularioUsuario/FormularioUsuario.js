/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../FormularioUsuario/FormularioUsuario.css";

function FormularioUsuario() {
  const [nombre, setNombre] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', { nombre, numeroTarjeta, fechaExpiracion, cvv });
  };

  return (
    <div>
      <h2>Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre en la Tarjeta:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Número de Tarjeta:
          <input type="text" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} />
        </label>
        <br />
        <label>
          Fecha de Expiración:
          <input type="text" value={fechaExpiracion} onChange={(e) => setFechaExpiracion(e.target.value)} />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" value={cvv} onChange={(e) => setCVV(e.target.value)} />
        </label>
        <br />
        <button type="submit">Procesar Pago</button>
      </form>
    </div>
  );
}

export default FormularioUsuario;