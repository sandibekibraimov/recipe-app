import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to='/' className='brand'>
          <h1>Cooking Hero!</h1>
        </NavLink>

        <NavLink to='/create'>Create Recipe</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
