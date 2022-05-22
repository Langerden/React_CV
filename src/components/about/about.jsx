import React from 'react';
import './about.css';
import Me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {RiUserStarLine} from 'react-icons/ri';
import {BsCodeSlash} from 'react-icons/bs';

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>    
              <small>2+ Years Working</small>              
            </article>

            <article className='about__card'>
              <RiUserStarLine className='about__icon'/>
              <h5>English</h5>    
              <small>B2 (Upper Intermediate)</small>
              
            </article>

            <article className='about__card'>
              <BsCodeSlash className='about__icon'/>
              <h5>Education</h5>    
              <small>Technician in Programming </small>
            </article>
          </div>
          <p id='description'>
            My experience help me to provide the best experience for the client. I think it's important to always be able to gain new knowledges and skills. Also these experiences not only gave me individual growth, but a facility and project objectives with teamwork.  <br/>
            I am very responsible with the activity to be carried out and with my work environment too. I am actually studying the programming career in the UTN and I also learn by my self about technology with different platforms constantly.
          </p>
          <br />
          <a href="#contact" className='btn btn-primary'> Contact Me</a>
        </div>
      </div>
    </section>
  )
}


export default About 
