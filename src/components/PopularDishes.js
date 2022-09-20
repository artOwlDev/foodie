
import React, { useEffect, useState } from 'react'
import "./populardishes.scss"
import notfound from "../img/img-not-found.png"
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { LocalHospital } from '@material-ui/icons';

const PopularDishes = () => {

    const [popular, setPopular] = useState([]);
    const [itemCount, setItemCount] = useState(24);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
        getPopular();
    },[])

    const getPopular = async () => {
        
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=96` )
        const data = await api.json();
        console.log(data);
        setPopular(data.recipes)

    }

    const loadMore = () => {
        setItemCount(itemCount+24);
    }

    const handleLoaded = () => {
        setIsLoaded(true);
    }
    
    return (
        <div className="wrapper">
            <h1>Our popular picks:</h1>
            <hr />
            <div className='popular-dishes'>
                {popular.slice(0,itemCount).map(recipe => {
                    return(
                        <div className="dish-item" key={recipe.id}>
                            <Link to={"/recipe/" + recipe.id}>
                                <img src={recipe.image || notfound} alt="Couldn't find image!" onLoad={() => handleLoaded()}/>
                                <p>{recipe.title}</p>
                                {recipe.veryHealthy && 
                                <div className='healthy'> 
                                    <LocalHospital className='icon'/>
                                </div>
                                }
                            </Link>
                        </div>
                    );
                })}
            </div>
            {itemCount <= 72 && isLoaded && <button onClick={loadMore}>Show more dishes</button>}
        </div>

    )
}


export default PopularDishes