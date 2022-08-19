import styled from 'styled-components'

const ContactArtStyled = styled.div`
*{
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
}
.title-contact{
  width: 100%;
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

  .info-contact{
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2{
      font-size: 34px;
      font-weight: 100;
      color: #ba63eb;
      line-height: 48px;
      padding: 0 12px;
    }

    img{
      height: 260px;
      width: 260px;
    }
  }
}


@media (min-width: 700px){
  .title-contact{
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: center;
    padding: 36px 24px 12px;

    h1{
      font-size: 52px;
    }
    .info-contact{
      display: flex;
      flex-direction: row;
    }

  }  

}
   

`

function ContactArt({ children }) {
    return (
      <ContactArtStyled>
        {children}
      </ContactArtStyled>
    )
  }
  
  export default ContactArt;