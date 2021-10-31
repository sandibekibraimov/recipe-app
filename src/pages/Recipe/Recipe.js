import React from 'react';
import './recipe.css';

import { useParams } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';

const Recipe = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className='recipe'>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <p>Used ingredients:</p>
          <ul>
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className='method'>Cooking method: {recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
