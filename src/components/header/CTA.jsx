import React from 'react'
import CV from '../../assets/CV_LinkedIn.pdf'

const CTA = () => {
   
  return (
    <div className='cta'>
        <a href={CV} className='btn '> Download CV </a>
        <a href='#contact' className='btn'> Let's talk </a>
    </div>
  )
}

export default CTA