

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components'

const SearchPage = (searched) => {

    const param = useParams();

    const [searchDish, setSearchDish] = useState([]);

    useEffect(() => {
        getDishes(param.search);
    },[param.search])

    const getDishes = async (searched) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searched}` )
        const data = await api.json();
        console.log(data);
        setSearchDish(data.results)
    }



    

    return (
        <div style={{backgroundColor : "rgba(238,239,248,255)", height: "100vh", overflowY : "auto"}}>
            <Navbar/>
            <Sidebar/>

            
            <Searches>
                {searchDish && searchDish.map(item => {
                    return(
                        <Link to={"/recipe/" + item.id}>
                            <Item id={item.id}>
                                <img src={item.image}/>
                                <p>{item.title}</p>
                            </Item>
                        </Link>
                    )
                })}
            </Searches>
        </div>
    )
}

const Searches = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Combo&family=Inter&family=Montserrat&family=Poppins:wght@400;700&display=swap');
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 4rem auto;
    font-family: 'Montserrat', sans-serif;
    
`;


const Item = styled.div`
    position: relative;
    margin: .8rem;
            
    img{
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 4px -1px #000000; 
        box-shadow: 0px 0px 4px -1px #000000;
        height: 16rem;
        object-fit:fill;
        border-radius: 1.5rem;
        filter: brightness(75%);
        transition: all 0.3s ease;

        &:hover{
            filter: brightness(100%);
        }

    }

    p{
        z-index: 3;
        font-size: 0.8rem;
        width: 100%;
        position: absolute;
        display: flex;
        bottom: 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        border-bottom-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
        color: white;
        background-color: rgba(0,0,0,0.5);
        height: 5vh;


    }
`;


export default SearchPage