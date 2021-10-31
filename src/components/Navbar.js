import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to='/' className='brand'>
          <h1>Cooking Hero!</h1>
        </NavLink>
        <SearchBar />
        <NavLink to='/create'>Create Recipe</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
