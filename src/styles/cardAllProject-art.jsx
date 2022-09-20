import styled from 'styled-components'

const CardAllArtStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
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