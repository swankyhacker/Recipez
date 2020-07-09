import React, { useState, useEffect } from 'react';
import Recipe from './Components/recipe.js';
import Navbar from './Components/navbar.js';
import Error from './Components/error.js';
import './App.css';
require('dotenv').config()

function App() {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chocolate');
  const [searchItem, setSearchItem] = useState('');


  let fetchRecipe = async () => { //Requests information from API
    try {
      const request = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await request.json();
      console.log(data);
      setRecipes(data.hits);
    }
    catch (err) {
      console.log(err);
    }
  }

  let updateSearchItem = e => { // Updates value of searchItem every time a key is pressed
    setSearchItem(e.target.value);
  }

  let updateQuery = e => { // Updates value of query and invokes the useEffect hook
    e.preventDefault(); // Prevents page from reloading(Page will refresh by default whenever form is submitted)
    setQuery(searchItem);
  }

  useEffect(() => {
    fetchRecipe();
  }, [query]); // Runs the function every time the value of query is updated and once the page starts/reloads

  return (
    <div className='main-page'>
      <Navbar updateQuery={updateQuery} updateSearchItem={updateSearchItem} />
      <div className='recipe-book'>

        {recipes.length > 0 ? recipes.map(recipe => ( // Checks if any recipes are returned
          <Recipe key={recipe.recipe.calories}
            label={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
            totalTime={recipe.recipe.totalTime} />
        ))
          : <Error />  // Error Page is rendered if no recipes are found
        }
      </div>
    </div>
  );
}

export default App;