
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import PopularDishes from '../components/PopularDishes'



const Popular = () => {
    return (
        <div style={{backgroundColor : "rgba(238,239,248,255)", height: "100vh", overflowY : "auto"}}>
            <Navbar/>
            <Sidebar/>
            <PopularDishes/>
        </div>

    )
}




export default Popular