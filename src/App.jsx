import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/Services.jsx';
import MyWork from './Components/MyWork/MyWork.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';


const App = () => {
  return (
    <div>
      <Navbar/> {/*mounting the Navbar Component*/}
      <Hero/> {/* mounting the Hero Compoment*/}
      <About/> {/* mounting the About Compoment*/}
      <Services/> {/* mounting the Services Compoment*/}
      <MyWork/> {/* mounting the MyWork Compoment*/}
      <Contact/> {/* mounting the Contact Compoment*/}
      <Footer/> {/* mounting the Contact Compoment*/}
    </div>
  )
}

export default App