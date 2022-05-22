import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlineWhatsApp, AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w2r1qn1', 'template_angfqxy', form.current, 'Q4wNdYdZloY5huV0w')
      .then((result) => {
          e.target.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };

  return (
    <section id='contact' > 
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:langer5296@gmail.com"> Send me an email </a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/denise-langer/"> Message me </a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://wa.me/+5491167365315"> Whatsapp me </a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" id="txtContact" rows="7" placeholder='Your message' required></textarea>
          <button type='submit'className='btn btn-primary' style={{"width": "100%"}}> Send Message </button>

        </form>
      </div>

    </section>
  )
}

export default Contact