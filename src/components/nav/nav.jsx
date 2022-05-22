import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {BsChatSquareText} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {useState} from 'react';
import './nav.css'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' className={activeNav=== '#' ? 'active': ''}> <AiOutlineHome/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')}  className={ activeNav=== '#about' ? 'active': ''}> <AiOutlineUser/> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}  className={ activeNav=== '#experience' ? 'active': ''} > <MdWorkOutline/> </a>
      <a href='#services' onClick={() => setActiveNav('#services')}  className={ activeNav=== '#services' ? 'active': ''} > <BsFillJournalBookmarkFill/> </a>
      <a href='#opinions' onClick={() => setActiveNav('#opinions')}  className={ activeNav=== '#opinions' ? 'active': ''} > <BsChatSquareText/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}  className={ activeNav=== '#contact' ? 'active': ''} > <AiOutlineMail/> </a>
    </nav>
  )
}

export default Nav