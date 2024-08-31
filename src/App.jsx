import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Hero/>
      <Skills/>
      <ContactMe/>
    </div>
    <Footer/>

    </>
  );
};

export default App
