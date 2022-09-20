
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {



    return (
        <div className='navbar-bg'>
            <div className="navbar">
                <div className="links">
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <h1>Foodie</h1>
                    </Link>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <span className='link'>Home</span>
                    </Link>
                    <Link to="/popular" style={{ textDecoration: 'none' }}>
                        <span className='link'>Popular</span>
                    </Link>
                    <Link to="/veggie" style={{ textDecoration: 'none' }}>
                        <span className='link'>Veggie</span>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}> 
                        <span className='link'>About</span>
                    </Link>
                    
                </div>
                <div className="contact">
                    <button>Contact us</button>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar