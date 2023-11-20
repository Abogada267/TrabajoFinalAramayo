import React from 'react';
import Brand from './Brand';
import CategoryList from './CategoryList';

const Header = () => {
  return (
    <header className="header">
      
      <div className="header__cart" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', marginTop: '60px', height: '50%', paddingTop: '5px' }}>
        <img src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping-thumbnail.png" alt="Carrito" style={{ width: '50px', height: 'auto' }} />
      </div>

      <div className="header__search">
        <input type="text" placeholder="escribe el servicio ..." style={{ backgroundColor: 'lightgray' }} />
        <button type="button">Buscar</button>
      </div>
      <div className="header__nav" style={{ color: 'blue', fontFamily: 'Arial', paddingRight: '2cm', display: 'interline-block' }}>
        <CategoryList />
        <a href="/ofertas" style={{ marginTop: '2cm' }}>Ofertas</a>
        <a href="/ayuda">Ayuda</a>
        {/* Otros enlaces */}
      </div>
           <Brand />
    </header>
  );
};

export default Header;

