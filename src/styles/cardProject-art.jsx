import styled from "styled-components";

const CardStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
}

.card-project {
    position: relative;
    height: 320px;
    width: 320px;
    margin: 48px 16px;

    .face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        overflow: hidden;
        transition: .8s;
    }
    
}


.card-project .front {
    transform: perspective(600px) rotateY(0deg);
    box-shadow: 0 15px 15px #000;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h3 {
        font-size: 32px;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30%;
        line-height: 45px;
        color: #FFF;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        align-self: center;
        padding-top: 16px;
    }
}


.card-project .back {
    transform: perspective(600px) rotateY(180deg);
    background: #ba63eb;
    padding: 15px;
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    box-shadow: 0 5px 10px #000;

    .link {
        background: none;
        border-top: solid 1px #f3f3f3;
        height: 50px;
        line-height: 50px;
    
        .button-project{
            font-size: 30px;
            background: none;
            text-decoration: none;
    
        }
    }

    h3 {
        background: none;
        font-size: 30px;
        margin-top: 20px;
        letter-spacing: 2px;
    }

    p {
        background: none;
        font-size: 18px;
        letter-spacing: 1px;
    }
}

.card-project:hover .front {
    transform: perspective(600px) rotateY(180deg);
}

.card-project:hover .back {
    transform: perspective(600px) rotateY(360deg);
}


@media screen and (min-width: 780px) {
    .card-project {
        height: 400px;
        width: 680px;
        margin: 70px 16px;
    }
}

`

function CardProjectArt({ children}) {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    )
}

export default CardProjectArt;