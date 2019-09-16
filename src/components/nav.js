import React from 'react'
import { Link } from 'gatsby'

import './nav.scss';

const Nav = ({ siteTitle }) => (
    <div className="nav">
        <input type="checkbox" name="" id="menu-toggle"></input>
        <label for="menu-toggle" id="trigger"></label>
        <label for="menu-toggle" id="burger"></label>

        <ul id="menu">
            <li className='home-section'><a href='#home'>Home</a></li>
            <li className='about-section'><a href='#about'>About Me</a></li>
            <li className='skills-section'><Link to='/skills'>Skills</Link></li>
            <li className='portfolio-section'><Link to='/portfolio'>Portfolio</Link></li>
            <li className='contact-section'><a href='/contact'>Contact Me</a></li>
        </ul>
    </div>
)

export default Nav