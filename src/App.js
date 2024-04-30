import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo.svg';

function App() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const searchRecipes = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/recipes/search?query=${query}`);
            setRecipes(response.data.results);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={searchRecipes}>Search</button>
                <div>
                    {recipes.map(recipe => (
                        <div key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;