import React, { useState } from 'react';
import './create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  };

  return (
    <div className='create'>
      <h2 className='page-title'>Add A New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        {/* ingridients */}
        <label>
          <span>Cooking method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>

        <button className='btn'>submit</button>
      </form>
    </div>
  );
};

export default Create;