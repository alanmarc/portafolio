import React from 'react';
import ProjectAllArt from '../../styles/cardAllProject-art';

export const CardAllProject = ({ title, imgProjectUrl, content, altImg, srcImg }) => {
  return (
    <ProjectAllArt>
        <div className='project-container'>
            <h2>{ title }</h2>
            <img className='img-project' src={ imgProjectUrl }/>
            <p>{ content }</p>
            <div>
                <h3>Tecnologías</h3>
                <div className='container-img'>
                    <img  alt='React JS' src='https://img.icons8.com/ios/100/000000/react-native--v1.png'/>
                    <img  alt='HTML' src='https://img.icons8.com/windows/100/000000/html-5.png'/>
                    <img  alt='CSS' src='https://img.icons8.com/material/100/000000/css3.png'/>
                    <img  alt='Javascript' src='https://img.icons8.com/windows/100/000000/html-5.png'/>
                    <img  alt='Git' src='https://img.icons8.com/material/100/000000/git.png'/>
                    <img alt={ altImg } src={ srcImg }/>
                </div>
            </div>
            <div className='more-info'>
              <p>Github</p>
              <p>Ver Proyecto</p>
            </div>
        </div>
    </ProjectAllArt>
  )
}
