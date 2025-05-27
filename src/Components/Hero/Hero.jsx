import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="nittin" />
        <h1><span>I'm Nittin Singh Yadav, </span> Software Developer based in Gurgoan(India).</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis blanditiis maiores quis autem, dolores architecto nulla, quidem voluptate nemo ducimus ab? Ad, nam officiis!</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
        
    </div>
  )
}

export default Hero