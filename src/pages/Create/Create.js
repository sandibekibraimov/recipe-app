import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './create.css';
import { useFetch } from '../../hooks/useFetch';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory();

  const { postData, data } = useFetch('http://localhost:3000/recipes/', 'POST');

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      method,
      cookingTime: cookingTime + ' minutes',
      ingredients,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIng) => [...prevIng, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      history.push('/');
    }
  }, [data, history]);

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

        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>

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
