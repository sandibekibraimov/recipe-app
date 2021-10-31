import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './searchbar.css';

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState('');
  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchItem}`);
  };
  return (
    <div className='searchbar'>
      <form onSubmit={handleSearch}>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          id='search'
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
