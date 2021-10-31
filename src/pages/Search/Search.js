import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import './search.css';

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = `http://localhost:3000/recipes?q=${query}`;
  const { data, error, isPending } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>Recipes including '{query}'</h2>
      {error && <h2 className='error'>{error}</h2>}
      {isPending && <h2 className='loading'>Loading...</h2>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
