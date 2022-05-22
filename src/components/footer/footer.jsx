import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {GiCoffeeCup} from 'react-icons/gi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#opinions">Opinions</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/denise.langer1/"> <FaFacebookF/></a>
        <a href="https://www.instagram.com/dark_denux/"> <FiInstagram /></a>        
        <a href="https://cafecito.app/langerd"> <GiCoffeeCup /></a>        
      </div>

      <div className="footer__copyright">
        <small>&copy; Denise Langer. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer