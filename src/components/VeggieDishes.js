
import React, { useEffect, useState } from 'react'
import "./veggiedishes.scss"
import { Link } from 'react-router-dom';
import { Favorite, LocalHospital } from '@material-ui/icons';

const VeggieDishes = () => {

    const [veggie, setVeggie] = useState([]);
    const [itemCount, setItemCount] = useState(24);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
        getVeggie();
    },[])

    const getVeggie = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=96&tags=vegan`);
        const data = await api.json();
        console.log(data);
        setVeggie(data.recipes)

    }

    const loadMore = () => {
        setItemCount(itemCount+24);
    }

    const handleLoaded = () => {
        setIsLoaded(true);
    }

    return (
        <div className="wrapper">
            <h1>Our veggie picks:</h1>
            <hr />
            <div className='veggie-dishes'>
                {veggie.slice(0,itemCount).map(recipe => {
                    return(
                        <div className="dish-item" key={recipe.id}>
                            <Link to={"/recipe/" + recipe.id}>
                                <img src={recipe.image} alt="" onLoad={() => handleLoaded()}/>
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

export default VeggieDishes