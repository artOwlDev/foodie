


import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import styled from 'styled-components'
import RecipeCard from '../components/RecipeCard';

const Recipe = () => {


    return (
        <div style={{backgroundColor : "rgba(238,239,248,255)", height: "100vh", overflowY : "auto"}}>
            <Navbar/>
            <Sidebar/>
            <RecipeCard/>
        </div>
    )
}


export default Recipe