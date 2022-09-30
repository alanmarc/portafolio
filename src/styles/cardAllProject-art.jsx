import styled from 'styled-components'

const CardAllArtStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
}
p, div, h3, h2, img {
    background: none;
}

.project-container{
  background: rgba(138, 165, 175, 0.2);
  border-radius: 20px;
  box-shadow: 10px 20px 5px #000;
  color: #FFF;
  height: 100%;
  max-width: 560px;
  margin: 26px auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .img-project{
    width: 90%;
  } 

  h2, p {
    padding: 16px; 
  }

  .more-info{
    display: flex;
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