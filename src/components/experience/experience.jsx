import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have</h5>
      <h2>My Knowledge</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <AiFillCheckCircle  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          
            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic / Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate / Advance</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Basic / Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic / Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Advance</small>
              </div>
            </article>
          
            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>SpringBoot</h4>
                <small className='text-light'>Intermediate / Advance</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Maven / Gradle</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Git/Github</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h4>JPA/Hibernate</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
          </div>


        </div>

      </div>
    </section>
  )
}

export default Experience