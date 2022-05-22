import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Know</h5>
      <h2>My education</h2>

      <div className='container service__container'>
        {/* ART 1 */}
        <article className='service'>
          <div className='service__head'>
            <h3>Universidad Tecnologica Nacional - UTN</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Programming languages  
                <small> (C, C#, PHP, JavaScript, CSS, HTML, Angular and Ionic) </small> </p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>Mathematics and Statistics</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>Software Architecture, Data Bases, Linux (OS), Data Processing System</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>English, Accounting and Business Organization</p>
              </li>
            </ul>

        </article>

{/* ART 2 */}
        <article className='service'>
          <div className='service__head'>
            <h3>Udemy</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p> <a href="https://www.udemy.com/certificate/UC-181b985d-92ac-4bf1-bf4d-f1e56d0338ba/" target={'_blank'}> Java Certification Course</a>  </p>
              </li>
              
              <li>
                <BiCheck className='service__list-icon' />
                <p> <a href="https://www.udemy.com/certificate/UC-e815a25d-6466-461b-aa11-b08699612ffd/" target={'_blank'}> Spring Framework and Spring Boot </a>  </p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p> <a href="https://www.udemy.com/certificate/UC-aa288c0f-90d5-405d-af78-0064c186fb17/" target={'_blank'}> Microsoft SQL Server </a>  </p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p> <a href="https://www.udemy.com/certificate/UC-eec5d482-9698-45f9-81fc-9e1a53ed5e12/" target={'_blank'}> Complete SQL Bootcamp </a>  </p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p> <a href="https://www.udemy.com/certificate/UC-573008db-e813-4d4d-9e7e-3e8c29cd822c/" target={'_blank'}> JavaScript From Cero to Master</a>  </p>
              </li>
            </ul>
        </article>

{/* ART 3*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Cursos</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Java FullStack - Gobierno de Buenos Aires</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>Técnico en armado y reparación de PC - CETIA</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>Curso de Testing en Java - Platzi</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>Curso de Java Spring - Platzi</p>
              </li>

              <li>
                <BiCheck className='service__list-icon' />
                <p>Control de versiones - Fundación Carlos Slim</p>
              </li>

            </ul>
        </article>
      </div>
    </section>
  )
}

export default Services