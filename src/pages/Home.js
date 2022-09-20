
import React from 'react'
import HomeSearch from '../components/HomeSearch'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from "styled-components"

const Home = () => {


  return (
    <Container>
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="other">
        <HomeSearch/>
        <Sidebar/>
      </div>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
  height: 100vh;
  background: rgba(238,239,248,255);
`;

export default Home