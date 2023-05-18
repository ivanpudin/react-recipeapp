import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe'
import NewRecipe from './components/NewRecipe';

export default function App() {
  const [recipes, setRecipes] = useState([])
  const [countries, setCountries] = useState([])
  const [ingredients, setIngredients] = useState([{ value: "" }])
  const [newrecipe, setNewRecipe] = useState({
    id: 0,
    name: "",
    author: "",
    country: "",
    ingredients: ingredients,
    instructions: ""
  })

  useEffect(() => {
    fetchRecipes();
    fetchCountries();
  }, [])

  const onInput = (e) => {
    setNewRecipe({
      ...newrecipe,
      id: recipes.length + 1,
      [e.target.name]: e.target.value
    })
  }
  
  const addIngredient = () => {
    setIngredients([...ingredients, { value: "" }]);
  }

  const ingredientInput = (e, i) => {
    const newIngredients = [...ingredients];
    newIngredients[i].value = e.target.value;
    setIngredients(newIngredients);
    setNewRecipe({
      ...newrecipe,
      ingredients: ingredients
    })
  }

  const fetchRecipes = async () => {
    try {
      const res = await axios.get('http://localhost:4000/recipes');
      setRecipes(res.data);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  }

  const fetchCountries = async () => {
    try {
      const res = await axios.get('http://localhost:4000/countries');
      setCountries(res.data);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    try {
      axios
        .post('http://localhost:4000/recipes', newrecipe)
        .then(response => {;
          fetchRecipes();
          alert('Recipe has been submitted.');
        })
        .catch(error => {
          console.log("Error submitting new recipe:", error);
        });
    } 
    catch (error) {
      console.log('Error posting recipe:', error);
    }
  }

  return (
    <>
      {recipes && countries ? (<BrowserRouter>
        <Header />
        <Routes>
          <Route
          path='/'
          element={<Home />} />
          <Route
          path='recipes'
          element={<Recipes data={recipes} />} />
          {recipes.map((recipe, i) => {
            return(
              <Route
              key={i}
              path={`/recipes/${recipe.name}`}
              element={
                <Recipe
                name={recipe.name}
                country={recipe.country}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions} />
              } />
            )
          })}
          <Route
          path='new'
          element={
            <NewRecipe
            countries={countries}
            ingredients={ingredients}
            onInput={onInput}
            addIngredient={addIngredient}
            ingredientInput={ingredientInput}
            submitHandler={submitHandler} />
          } />
        </Routes>
      </BrowserRouter>) : (<div>Loading...</div>)}
    </>
  )
}
