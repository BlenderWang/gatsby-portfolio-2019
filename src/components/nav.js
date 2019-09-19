import React from 'react'
import { Link } from 'gatsby'

import './nav.scss';

const Nav = ({ siteTitle }) => (
    <div className="nav">
        <input type="checkbox" name="" id="menu-toggle"></input>
        <label for="menu-toggle" id="trigger"></label>
        <label for="menu-toggle" id="burger"></label>

        <ul id="menu">
            <li className='home-section'><Link to='/'>Home</Link></li>
            <li className='about-section'><Link to='/'>About Me</Link></li>
            <li className='skills-section'><Link to='/skills'>Skills</Link></li>
            <li className='portfolio-section'><Link to='/portfolio'>Portfolio</Link></li>
            <li className='contact-section'><Link to='/contact'>Contact Me</Link></li>
        </ul>
    </div>
)

export default Nav