
import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Popular from './Popular'
import Veggie from './Veggie'
import About from './About'
import Recipe from './Recipe'
import SearchPage from './SearchPage'

const Pages = () => {
    return (
        <Router>
            <div className='pages'>
                <Routes>
                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/popular" element={<Popular/>}/>
                    <Route path="/veggie" element={<Veggie/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/recipe/:dishID" element={<Recipe/>}/>
                    <Route path="/search/:search" element={<SearchPage/>}/>

                    
                </Routes>
            </div>
        </Router>
       
    )
}



export default Pages