import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='Contact-Container'>
        <h2>Contact Me</h2>

        <div className='contact-content'>
            <div style ={{flex:1}}>
                <ContactInfoCard 
                iconUrl="./assets/images/apple.png"
                text ="rvram789@gmail.com"
                />
                <ContactInfoCard 
                iconUrl="./assets/images/github-icon.png"
                text ="https://github.com/Rvram789"
                />
            </div>

            <div style ={{flex:1}}>
              <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe
