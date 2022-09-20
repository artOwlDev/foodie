
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import VeggieDishes from '../components/VeggieDishes'

const Veggie = () => {
    return (
        <div style={{background: 'rgba(238,239,248,255)', height: '100vh', overflowY: 'auto'}}>
            <Navbar/>
            <Sidebar/>
            <VeggieDishes/>
        </div>
    )
}

export default Veggie