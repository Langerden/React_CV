import React from 'react';
import './opinions.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Opinions = () => {

  const data = [
    {
      id: 1,
      name: 'Roger Moreno',
      img: AVT1,
      opinion: "Proactiva, responsable, autodidacta, comprometida y profesional. Denise tiene muchos de los síntomas y skills que toda organización debería buscar en un profesional, da todo lo que tiene con la finalidad de completar asignaciones/tareas y retos planteados exitosamente. Durante el tiempo que estuvo bajo me supervision, demostró tener las ganas de aprender y aportar que todo equipo de desarrollo necesita. Toma la iniciativa oportunamente, aportando gran valor a cualquier equipo de trabajo. Una gran persona y excelente compañera de trabajo que recomendaría sin dudar "
    },
    {
      id: 2,
      name: 'Alejandro Emanuel Chachagua',
      img: AVT2,
      opinion: "Denise me ayudo mucho en las clases con sus conocimientos y con su gran capacidad de enseñar. Gracias a ella aprendí muchos conocimientos útiles y prácticos a la hora de desarrollar y ordenar códigos en varios lenguajes. Es una persona amable, inteligente, trabajadora y con una gran predisposición a la hora de ayudar a sus compañeros, siempre busca crecer y mejorar como profesional lo que la hace una persona responsable y dinámica a la hora de empezar nuevos proyectos. Es una gran profesional y compañera!"
    },
    {
      id: 3,
      name: 'Facundo Falcone',
      img: AVT3,
      opinion: "Denise es una persona maravillosa, llena de energía y con una capacidad cognitiva inmaculada, ha demostrado tener un potencial inmenso en las actividades que lleva adelante, tiene un afán por aprender cada día mas para poder superarse y por supuesto, una calidad humana espléndida. Denise es alguien quien vale la pena conocer y tener en su equipo, jamás te decepcionará y siempre cumplirá con las tareas asignadas en tiempo y forma. Ella tiene la capacidad de ser uno de los pilares fundamentales que haga triunfar al equipo de trabajo!"
    }
  ]


  return (
    <section id='opinions'>
      <h5> Review from persons</h5>
      <h2>Opinions</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(item => { 
          return (
              <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                <img src={item.img} alt={item.name} />
              </div>
                <h5 className='client__name'>{item.name}</h5>
                <small className='client__review'>{item.opinion}</small>
            </SwiperSlide>
          )
        })}
        {/* <article className='testimonial'>
          <div className="client__avatar">
            <img src="" alt="" />
            <h5 className='client__name'></h5>
            <small className='client__review'></small>
          </div>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Opinions