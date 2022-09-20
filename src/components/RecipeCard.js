

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './recipecard.scss'
import notfound from "../img/img-not-found.png"


const RecipeCard = () => {

    const [recipeDetails, setRecipeDetails] = useState('');
    const [activeButton, setActiveButton]  = useState('about');
    const [moreRecipes, setMoreRecipes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    let idParams = useParams();

    const getDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${idParams.dishID}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const dataDetails = await data.json();
        console.log(dataDetails);
        setRecipeDetails(dataDetails);
    }

    const getMoreRecipes = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`)
        const dataDetails = await data.json();
        console.log(dataDetails);
        setMoreRecipes(dataDetails.recipes);
    }   

    useEffect(() => {
        getDetails();
    }, [idParams.dishID])

    useEffect(() => {
        getMoreRecipes()
    },[])

    const clickLoad =  () => {
        window.location.reload();
    }



    return (
        <div className='card'>
            <div className="recipe-info">
                <h1>{recipeDetails.title}</h1>
                <div className="recipe-card">
                    <img src={recipeDetails.image || notfound} alt="" />
                    <div className="recipe-detail">
                        <div className="buttons">
                            <button onClick={() => setActiveButton('about')} className={activeButton === 'about' ? 'active-button' : ''}>About</button>
                            <button onClick={() => setActiveButton('ingredients')} className={activeButton === 'ingredients' ? 'active-button' : ''}>Ingredients</button>
                            <button onClick={() => setActiveButton('instructions')} className={activeButton === 'instructions' ? 'active-button' : ''}>Instructions</button> 
                        </div>

                        {activeButton === 'about' && (
                            <div className="summary">
                                <p dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></p>
                            </div>
                        )}

                        {activeButton === 'ingredients' && (
                            <div className='ingredients'>
                                {recipeDetails.extendedIngredients.map(ingredient => 
                                    <p key={ingredient.id}>- {ingredient.original}</p>
                                )}
                            </div>
                        )}

                        {activeButton === 'instructions' && (
                            <div className="instructions">
                                <p dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></p>
                            </div>
                        )}


                
                        
                    </div>
                </div>

            </div>

            <div className="similar">
                <p>Check out some other recipes</p>
                
                <div className='items-div'>
                    {moreRecipes.map(recipe => {
                        return(
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to={"/recipe/" + recipe.id}>
                                <div className='similar-items'>
                                    <img src={recipe.image || notfound} alt="" />
                                    <h1>{recipe.title}</h1>
                                </div>
                            </Link>   
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default RecipeCard