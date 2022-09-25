

import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const About = () => {
    return (
        <div style={{background: 'rgba(238,239,248,255)', height: '100vh'}}>
            <Navbar/>
            <Sidebar/>

            <Text>
                <h1>Welcome!</h1>
                <p>Fooodie is a website aiming to provide you with all the recipes to your favorite dishes.</p>
            </Text>

        </div>
    )
}

const Text = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Combo&family=Inter&family=Montserrat&family=Poppins:wght@400;700&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    align-items: center;

    h1{
        margin: 4rem;
    }
`;

export default About

