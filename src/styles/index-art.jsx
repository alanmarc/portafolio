import styled from 'styled-components'

const IndexArtStyled = styled.div`
*{
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
  background-color: #0F184F;
}

  .presentation{
    background-image: url("https://tekla.io/wp-content/uploads/2022/03/Recurso1.png");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
  }

  .info{
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    border: 2px solid black;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin: 0 24px;
    
    h1{
      background: none;
      padding: 8px 0;
    }
    h2{
      background: none;
      padding: 8px 0;
    }
    .text{
      text-align: center;
    }
    img{
        width: 220px;
        height: 220px;
        margin: 24px 0;
    }

  }

  .button-contact{
    background-color: #16377C;
    border-radius: 10px;
    border: 2px solid #000;
    font-size: 28px;
    height: 60px;
    width: 180px;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0 8px 0;
  
  }
  
  .about{
    padding: 32px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFF;
    
    h2{
      color: #ba63eb;
      padding: 16px 0;
    }
    p{
      padding: 16px;
    }
    img{
      width: 280px;
      height: 280px;
      padding: 12px 0;
      color: #FFF;
    }
  }

  .skills{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2{
      color: #ba63eb;
      padding: 16px 0;
    }

    h3{
      color: #ba63eb;
      padding: 32px 0 0 0
    }

    .soft-skills{
      padding: 16px 16px;
      width: auto;
    }

    .skills-container{
      display: flex;
      flex-direction: row;
      padding: 16px 16px;
      
    }
  }

  .projects{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
      color: #ba63eb;
      padding: 16px 0;
    }
    
  }


  

  @media screen and (min-width: 780px) {
    .presentation{
      margin: 0px;
      height: 800px;
      display: flex;
      justify-content: center;
      align-self: center;
      
    }
  
    .info{
      width: 800px;
      height: 480px;
      justify-content: center;
      align-items: center;
      text-align: center;
      align-self: center;

    }
    
  
    .about{
      padding: 26px 0;
    }
    
    .about-container{
      min-width: 500px;
      display: flex;

      p,img{
        margin: 8px 12px;
      }

    }

    .skills{


      .soft-skills{
        width: auto;
        display: flex;
        flex-direction: row;
      }
    }
  }
  

`

function IndexArt({ children }) {
    return (
      <IndexArtStyled>
        {children}
      </IndexArtStyled>
    )
  }
  
  export default IndexArt;