import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title 1',
    github: 'https://github.com/Langerden'    
  },
  {
    id: 2,
    image: IMG2,
    title: 'Title 2',
    github: 'https://github.com/Langerden'    
  },
  {
    id: 3,
    image: IMG3,
    title: 'Title 3',
    github: 'https://github.com/Langerden'    
  },
  {
    id: 4,
    image: IMG4,
    title: 'Title 4',
    github: 'https://github.com/Langerden'    
  },
  {
    id: 5,
    image: IMG5,
    title: 'Title 5',
    github: 'https://github.com/Langerden'    
  },
  {
    id: 6,
    image: IMG6,
    title: 'Title 6',
    github: 'https://github.com/Langerden'    
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map(item => {
          return (
          <div className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3> {item.title} </h3>
            <div className="portfolio__item-cta">
              <a href={item.github} className='btn' target='_blank'>Github</a>
              {/* <a href="https://github.com/Langerden" className='btn btn-primary'>Github</a> */}
            </div>
          </div> 
          )}
          )}       
      </div>
    </section>
  )
}

export default Portfolio