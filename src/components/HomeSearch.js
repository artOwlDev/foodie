
import React, { useState, useEffect } from 'react'
import "./homesearch.scss"
import waiter_img from "../img/Capture.png"
import {Search, SearchOutlined } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'

const HomeSearch = () => {

    const [searchDish, setSearchDish] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        navigate("/search/" + searchDish)
    }

    const handleOnChange = (e) => {
        setSearchDish(e.target.value)
    }
    

    return (
        <div className='home-search'>
            <div className="text-area">
                <div className="text-container">
                    <h1>Decided what's for dinner?</h1>
                    <h3>Find all the recipes to your favorite dishes with a click of a button using the largest recipe database.</h3>
                    <div className="search-area">
                        <Search className='icon'/>
                        <form action="" onSubmit={handleOnSubmit}>
                            <input onChange={handleOnChange} type="text" name="" id="" placeholder="Search for recipes, I'm sure we have it.." value={searchDish}/>
                        </form>

                    </div>
                    
                </div>
                
            </div>
            <div className="image">
                <img src={waiter_img} alt="" />
            </div>
        </div>
    )
}

export default HomeSearch