import React from 'react'
import { Link } from 'react-router-dom'
import { CardProject } from '../components/cards/CardProject'
import { CardSkill } from '../components/cards/CardSkill'
import { Footer } from '../components/footer/Footer'
import IndexArt from '../styles/index-art'

import giftApp from '../../public/static/giftapp.png';
import portfolio from '../../public/static/portfolio.png';
import profileGithub from '../../public/static/profilegithub.png';

export const Index = () => {
  return (
    <IndexArt>
      <section className='presentation'>
        <div className='info'>
          <h1>Alan Marcos <br/>Desarrollador Frontend</h1>
          <h2>Ing. Tecnologías de la información</h2>
          <Link className='button-contact' to={"/contact"}> Contactame</Link>
        </div>
      </section>
      <section className='about'>
        <h2>Acerca de mi</h2>
        <div className='about-container'>
          <p>Actualmente soy desarrollador Frontend, me encanta trabajar con las tecnologías de Javascript, HTML, CSS, ReactJS y React Native. Con las que he desarrollado y colaborado en proyectos escolares, laborales y personales. </p>
          <img src="https://img.icons8.com/ios-glyphs/480/000000/code.png"/>
          <p> Apasionado por la tecnología que me motiva a estar aprendiendo y adquiriendo continuamente habilidades de desarrollo, tendencias tecnologicas desde el lado del frontend y backend, fortaleciendome en el desarrollo de aplicaciones web</p>
        </div>
      </section>
      <section className='skills'>
        <h2>Habilidades</h2>
        <h3>Soft Skills</h3>
        <div className='soft-skills'>
          <div className='skills-container'>
            <CardSkill
            url="https://img.icons8.com/color/240/000000/group-task.png"
            name="Comunicación asertiva"
            />
            <CardSkill
            url="https://img.icons8.com/color/240/000000/property-time.png"
            name="Gestión de tiempo"
            />
          </div>
          <div className='skills-container'>
            <CardSkill
            url="https://img.icons8.com/plasticine/240/000000/lifecycle.png"
            name="Adaptabilidad"
            />
            <CardSkill
            url="https://img.icons8.com/dusk/240/000000/brainstorm-skill.png"
            name="Resolución de problemas"
            />
          </div>
        </div>
        <h3>Hard Skills</h3>
        <div className='soft-skills'>
          <div className='skills-container'>
            <CardSkill
            url="https://img.icons8.com/color/240/000000/javascript--v1.png"
            name="JavaScript"
            />
            <CardSkill
            url="https://img.icons8.com/color/240/000000/html-5--v1.png"
            name="HTML5"
            />
          </div>
          <div className='skills-container'>
            <CardSkill
            url="https://img.icons8.com/color/240/000000/css3.png"
            name="CSS3"
            />
            <CardSkill
            url="https://img.icons8.com/officel/240/000000/react.png"
            name="ReactJS"
            />
          </div>
        </div>
        <div className='soft-skills'>
          <div className='skills-container'>
            <CardSkill
            url="https://img.icons8.com/external-flaticons-flat-flat-icons/240/000000/external-responsive-design-devices-flaticons-flat-flat-icons-2.png"
            name="Responsive Design"
            />
            <CardSkill
            url="https://img.icons8.com/offices/240/000000/react.png"
            name="React Native"
            />
          </div>
          <div className='skills-container'>
            <CardSkill
            url="https://img.icons8.com/color/240/000000/nextjs.png"
            name="NextJS"
            />
            <CardSkill
            url="https://img.icons8.com/color/240/000000/nodejs.png"
            name="NodeJS"
            />
          </div>
        </div>
        <div className='soft-skills'>
          <div className='skills-container'>
            <CardSkill
            url="https://img.icons8.com/color/240/000000/python--v1.png"
            name="Python"
            />
            <CardSkill
            url="https://img.icons8.com/color/240/000000/git.png"
            name="Git"
            />
          </div>
          <div className='skills-container'>
            <CardSkill
            url="https://img.icons8.com/dusk/240/000000/postman-api.png"
            name="Postman"
            />
            <CardSkill
            url="https://img.icons8.com/fluency/240/000000/typescript.png"
            name="TypeScript"
            />
          </div>
        </div>  
      </section>
      <section className='projects'>
        <h2>Proyectos</h2>
        <div>
          <CardProject
          title="Portafolio de Proyectos"
          img={portfolio}
          description="Aplicacion Web creada para compartir información de los proyectos que he realizado e información de contacto."
          />
          <CardProject
          title="Profile Github"
          img={profileGithub}
          description="Aplicacion Web para buscar diferentes usuarios de Github, mostrar una breve reseña sobre el usuario. Obtenido mediante la Api de Github."
          />
          <CardProject
          title="Buscador GiftApp"
          img={giftApp}
          description="Aplicación web para la búsqueda de imágenes tipo gift. Este proyecto fue desarrollado con ReactJs y utilizando una API de terceros"
          />
        </div>
      </section>
      <Footer/>
    </IndexArt>
  )
}
