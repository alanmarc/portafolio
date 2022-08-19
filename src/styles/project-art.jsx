import styled from 'styled-components'

const ProjectArtStyled = styled.div`
*{
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
  background-color: #0F184F;
}

.title-project{
    padding: 36px 24px;
    h1{
        text-align: center;
        background: none;
        color: #ba63eb;
        font-size: 42px;
        font-weight: 900;
        line-height: 56px;
        padding: 8px 0;
    }
}




`

function ProjectArt({ children }) {
    return (
      <ProjectArtStyled>
        {children}
      </ProjectArtStyled>
    )
  }
  
  export default ProjectArt;