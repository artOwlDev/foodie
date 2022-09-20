

import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'
import "./sidebar.scss"

const Sidebar = () => {


    return (
        <div className='sidebar'>
            <div className="icons">
                
                <Instagram className='icon ig'/>
                <Facebook className='icon fb'/>
                <Twitter className='icon twt'/>
                <a href="https://www.linkedin.com/in/artun-selcuk-bb782019a/" target="_blank"><LinkedIn className='icon lin'/></a>
                <a href="https://github.com/artOwlDev" target="_blank"><GitHub className='icon git'/></a>
                <div className="vl"></div>
            </div>
        </div>
    )
}

export default Sidebar