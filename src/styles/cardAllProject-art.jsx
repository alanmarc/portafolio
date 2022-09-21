import styled from 'styled-components'

const CardAllArtStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
}

.project-container{
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  box-shadow: 10px 20px 5px #000;
  color: #FFF;
  height: 100%;
  max-width: 560px;
  margin: 32px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  

  h2{

  }

  img{
    width: 100%;
  }
}

`


function ProjectAllArt({ children }) {
    return (
      <CardAllArtStyled>
        {children}
      </CardAllArtStyled>
    )
  }
  
  export default ProjectAllArt;