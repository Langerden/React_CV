import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GiCoffeeCup} from 'react-icons/gi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/denise-langer/' target='_blank'> 
            <BsLinkedin/> 
        </a>
        <a href='https://github.com/Langerden' target='_blank'>
            <FaGithub/>
        </a>
        <a href='https://cafecito.app/langerd' target='_blank'>
            <GiCoffeeCup/>
        </a>
    </div>
  )
}

export default HeaderSocials