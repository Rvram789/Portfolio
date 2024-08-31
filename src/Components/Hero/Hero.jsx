import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p className='highlight'>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
            </p>
        </div>

        <div className='hero-img'>
            <img className='main-visual' src="./assets/images/image1.png" alt="Main Visual"/>
            <div className='icon-row'>
                <div className='tech-icon'>
                    <img src='./assets/images/html.png' alt="HTML Logo"></img>
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/css.png' alt="CSS Logo"></img>
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/javascript.png' alt="JavaScript Logo"></img>
                </div>

                <div className='tech-icon'>
                    <img src='./assets/images/react-logo.png' alt="React Logo"></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
