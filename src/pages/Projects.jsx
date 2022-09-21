import React from 'react'
import { CardAllProject } from '../components/cards/CardAllProject'
import { Footer } from '../components/footer/Footer'
import ProjectArt from '../styles/project-art'

export const Projects = () => {
  return (
    <ProjectArt>
      <section className='title-project'>
          <h1>Proyectos realizados</h1>
      </section>
      <section>
        <CardAllProject
          title="Portafolio de Proyectos"
          imgProjectUrl="https://www.cetys.mx/educon/wp-content/uploads/2021/09/100198fa-f9e5-44e0-8e26-acc0bd0d327c.png"
          content="Aplicacion Web creada para compartir infromación de los proyectos que he realizado"
        />
        <CardAllProject
          title="AppGift"
          imgProjectUrl="https://www.cetys.mx/educon/wp-content/uploads/2021/09/100198fa-f9e5-44e0-8e26-acc0bd0d327c.png"
          content="Aplicacion Web para buscar gifs animados mediante el consumo de una api "
        />
        <CardAllProject
          title="Profile Github"
          imgProjectUrl="https://www.cetys.mx/educon/wp-content/uploads/2021/09/100198fa-f9e5-44e0-8e26-acc0bd0d327c.png"
          content="Aplicacion Web para buscar diferentes usuarios de Github, mostrar una breve reseña sobre el usuario. Obtenido mediante la Api de Github."
        />
      </section>
      <Footer/>
    </ProjectArt>
  )
}
