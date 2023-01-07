import React from 'react'
import { CardAllProject } from '../components/cards/CardAllProject'
import { Footer } from '../components/footer/Footer'
import ProjectArt from '../styles/project-art'

import giftApp from '../../public/giftapp.png';
import portfolio from '../../public/portfolio.png';
import profileGithub from '../../public/profilegithub.png';

export const Projects = () => {
  return (
    <ProjectArt>
      <section className='title-project'>
          <h1>Proyectos realizados</h1>
      </section>
      <section className='section-projects'>
        <CardAllProject
          title='Portafolio de Proyectos'
          imgProjectUrl={portfolio}
          content='Aplicacion Web creada para compartir infromación de los proyectos que he realizado'
          gitHubUrl='https://github.com/alanmarc/portafolio'
          projectUrl='https://portafolio-sable-zeta.vercel.app/'
        />
        <CardAllProject
          title='AppGift'
          imgProjectUrl={giftApp}
          content='Aplicacion Web para buscar gifs animados mediante el consumo de una api '
          gitHubUrl='https://github.com/alanmarc/AppGift'
          projectUrl='https://app-gift-k9zwvzzsm-alanmarc.vercel.app/'
        />
        <CardAllProject
          title='Profile Github'
          imgProjectUrl={profileGithub}
          content='Aplicacion Web para buscar diferentes usuarios de Github, mostrar una breve reseña sobre el usuario. Obtenido mediante la Api de Github.'
          gitHubUrl='https://github.com/alanmarc/profile-github'
          projectUrl='https://profile-github-mu.vercel.app/'
        />
      </section>
      <Footer/>
    </ProjectArt>
  )
}
