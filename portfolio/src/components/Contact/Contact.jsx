import React from 'react'
import ContactForm from './ContactForm'
import facebookicon from '../../assets/facebook-icon.png'
import twittericon from '../../assets/twitter.png'
import instagramicon from '../../assets/instagram.png'
import youtubeicon from '../../assets/youtube.png'

import './contact.css'
function Contact() {
  return (
    <section id="contact">
        <div className="contactText">
            <h2>Contact Me</h2>
            <p>Please fill on the form below to dicuss any work suggestion</p>
        </div>
        <ContactForm/>
        <div id="links">
      <img src={facebookicon} alt="" className="link" />
      <img src={twittericon} alt="" className="link" />
      <img src={instagramicon} alt="" className="link" />
      <img src={youtubeicon} alt="" className="link" />
    </div>
    </section>
  )
}

export default Contact
