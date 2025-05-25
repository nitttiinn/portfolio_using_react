import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg';

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src= {profile_img} alt="nittin"/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, incidunt!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p >HTML & CSS</p><hr style={{width:"50%"}}/></div> 
                    <div className="about-skill"><p >React.js</p><hr style={{width:"30%"}}/></div> 
                    <div className="about-skill"><p >Javascript</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p >Next.js</p><hr style={{width:"20%"}}/></div> 
                    <div className="about-skill"><p >MySQL</p><hr style={{width:"80%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1</h1>
                <p>Year of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>4</h1>
                <p>Projects Completed</p>
            </div>
        </div>
    </div>
  )
}

export default About