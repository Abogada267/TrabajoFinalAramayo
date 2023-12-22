/* eslint-disable no-unused-vars */
     import React, { useState } from 'react';

function Checkout() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [repetirEmail, setRepetirEmail] = useState('');
  const [orderId, setOrderId] = useState(null); 

  const handleFinalizarOrden = () => {
       const nuevaOrderId = '123'; 
    setOrderId(nuevaOrderId);
  };
 
  const emailsCoinciden = email === repetirEmail;

  return (
    <div>
      <h2>Ingresa tus datos para continuar con la compra</h2>

      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </label>
      <br />
      <label>
        Teléfono:
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <br />


      <label>
        Correo Electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Repetir Correo Electrónico:
        <input type="email" value={repetirEmail} onChange={(e) => setRepetirEmail(e.target.value)} />
      </label>
      {!emailsCoinciden && <p>Los correos electrónicos no coinciden</p>}

      <button onClick={handleFinalizarOrden}>Finalizar Orden</button>

           {orderId && <p>ID de la orden: {orderId}</p>}
    </div>
  );
}

export default Checkout;