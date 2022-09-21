import React from 'react';
import ProjectAllArt from '../../styles/cardAllProject-art';

export const CardAllProject = ({ title, imgProjectUrl, content }) => {
  return (
    <ProjectAllArt>
        <div className='project-container'>
            <h2>{ title }</h2>
            <img src={ imgProjectUrl }/>
            <p>{ content }</p>
            <div>
                <h3>Tecnologías</h3>
                <div>
                    
                </div>
            </div>
        </div>
    </ProjectAllArt>
  )
}
