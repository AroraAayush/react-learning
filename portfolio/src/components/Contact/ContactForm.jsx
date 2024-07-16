import React,{useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
function ContactForm() {
  const formRef=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formRef.current)
    emailjs
      .sendForm('service_8vji8kp', 'template_1ivx6qm', formRef.current, 'mCk4iVt7jRU1wztre')
      .then(
        (result) => {
          console.log('SUCCESS!',result);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div >
        <form ref={formRef} action='#' id="contactForm" onSubmit={sendEmail}>
            <input type="text" placeholder='Your Name' className='namefield inputfield' name='from_name'/>
            <input type="email" placeholder='Your email' className='emailfield inputfield' name='from_email'/>
            <textarea name="message" rows="5" placeholder='Your Message' className='messagefield inputfield' ></textarea>
            <button type="submit" class="submitbtn">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm
