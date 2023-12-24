/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Checkout() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [repetirEmail, setRepetirEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const { cartItems } = useCart();

  const isFormValid = nombre !== '' && apellido !== '' && telefono !== '' && email !== '' && email === repetirEmail;

  const handleFinalizarOrden = () => {
    const nuevaOrderId = '123';
    setOrderId(nuevaOrderId);

    imprimirFormulario({ nombre, apellido, telefono, email, cartItems });
  };

  const imprimirFormulario = ({ nombre, apellido, telefono, email, cartItems }) => {
    if (cartItems) {
      const contenidoFormulario = `
        Nombre: ${nombre}
        Apellido: ${apellido}
        Teléfono: ${telefono}
        Correo Electrónico: ${email}
        
        Productos Comprados:
        ${cartItems.map(item => `- ${item.nombre} (${item.cantidad} unidades) - ${item.precioTotal} USD`).join('\n')}
        
        Total: ${calcularTotal(cartItems)} USD
      `;

      const ventanaImpresion = window.open('', '_blank');
      ventanaImpresion.document.write(`<pre>${contenidoFormulario}</pre>`);
      ventanaImpresion.document.close();

      ventanaImpresion.print();
    }
  };

  const calcularTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.precioTotal, 0);
  };

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
      {!isFormValid && <p>Por favor, completa todos los campos y asegúrate de que los correos electrónicos coincidan</p>}

      <button onClick={handleFinalizarOrden} disabled={!isFormValid}>
        Realizar Compra
      </button>

      {orderId && <p>ID de la orden: {orderId}</p>}
    </div>
  );
}

export default Checkout;