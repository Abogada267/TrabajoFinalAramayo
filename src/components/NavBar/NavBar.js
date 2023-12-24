/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar({ categories }) {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/galeria">DERECHO LABORAL</Link></li>
        <li>
          <select onChange={(e) => navigate(`/categories/${e.target.value}`)}>
            <option value="">Todas las Categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

NavBar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
};

export default NavBar;