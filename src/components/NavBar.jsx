import React from 'react';
import MenuIcon from './MenuIcon';
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1><a id='logo' href='#home'>Portfolio</a></h1>
      <div className='menuIcon'>
        <MenuIcon/>
      </div>
      <ul>
        <li><a href="#sectionOne">About</a></li>
        <li><a href="#sectionTwo">Projects</a></li>
        <li><a href="#sectionThree">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;