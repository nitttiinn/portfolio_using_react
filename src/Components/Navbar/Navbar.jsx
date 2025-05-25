import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const[menu, setMenu] = useState("home");
  return (
    <div className = 'navbar'>
        {/* adding html structure for navigation*/} 
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li><p>Home</p>{menu === "home"?<img src = {underline} alt = ''/>:<></>}</li>
            <li><p>About Me</p></li>
            <li><p>PortFolio</p></li>
            <li><p>Services</p></li>
            <li><p>Contact</p></li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar