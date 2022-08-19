import styled from "styled-components";

const CardStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
}

.card-skill{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 150px;
    margin: 0 20px;
    img{
        width: 150px;
        weight: 150px;
    }
    h4{
        color: #FFF;
        font-size: 24px;
        line-height: 20px;
        max-width: 150px;
        
    }
}


@media screen and (min-width: 780px) {

    .card-skill{
        max-width: 240px;
        margin: 0;
        img{
            width: 210px;
            weight: 210px;
        }
    }
}

`;

function CardSkillArt({ children }){
    return(
        <CardStyled>
            {children}
        </CardStyled>
    )
}

export default CardSkillArt;