import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';


const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="nittin" />
        <h1><span>I'm Nittin Singh Yadav, </span> Software Developer based in Gurgoan(India).</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis blanditiis maiores quis autem, dolores architecto nulla, quidem voluptate nemo ducimus ab? Ad, nam officiis!</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With me</div>
            <div className="hero-resume">My Resume</div>
        </div>
        
    </div>
  )
}

export default Hero