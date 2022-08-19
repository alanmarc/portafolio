import styled from "styled-components";

const CardStyled = styled.div`
*{
    margin: 0;
    box-sizing: border-box;
    font-family: serif;
    background: rgba(0, 0, 0, 0.4);
    
}

.form-contact, .form-contact form,.form-contact form p, .container-form , .container-form div, .container-form div p, .form-contact label, .form-contact input{
    background: none;
}

p, label, input, textarea{
    font-size: 20px;
    line-height: 26px;
}


.container-contact{
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 12px 34px 40px;;
}

.img-contact{
    background: none;
    img{
        height: 180px;
        width: 180px;
        background: none;
    }
}
.container-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .social{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .social a{
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 8px;
        text-decoration: none;

        img{
            height: 50px;
            width: 50px;
        }

        p{
            padding-left: 16px;
            color: #FFF;
        }
    }
    .social a,.social a img{
        background: none;
        filter: opacity(0.3) drop-shadow(0 0 0 #FFF); 
    }
}

.form-contact form{
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    padding: 12px;

    p{
        padding: 16px 12px 0;
    }
    label{
        padding: 28px 12px 8px;
    }
    
    input, textarea{
        height: 30px;
        background: rgba(255, 255, 255, 0.12);
        border: #FFF .1px solid;
        border-radius: 4px;
        color: #FFF;
        margin: 0 12px;
        padding: 6px;
    }
    .input-message{
        height: 120px;
        text-align: start;
    }
    button{
        background-color: #16377C;
        border-radius: 10px;
        border: 1px solid #FFF;
        font-size: 28px;
        height: 50px;
        width: 180px;
        text-decoration: none;
        text-align: center;
        color: white;
        display: flex;
        align-self: center;
        justify-content: center;
        margin: 24px 0 8px 0;
        padding: 8px;
    }
}



@media screen and (min-width: 780px) {
    
    p, label, input, textarea{
        font-size: 28px;
        line-height: 26px;
    }

    .container-contact{
        margin: 12px 34px 50px;
    }

    .img-contact{
        img{
            height: 220px;
            width: 220px;
        }
    }

    .container-form{
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 16px;

        .container-social{
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 30%;
            justify-content: space-around;
        }

        .social{
            flex-direction: column;
            height: 100vh;
            justify-content: space-around;

            a img{
                height: 70px;
                width: 70px;
            }
        }

        .form-contact{
            width: 70%;
            height: 100%;
            justify-content: space-around;
            
            label{
                padding: 40px 12px 8px;
            }

            input{
                height: 40px;
            }

            .input-message{
                height: 180px;
                text-align: start;
            }

            button{
                font-size: 32px;
                height: 60px;
                width: 240px;
                margin: 40px 0 8px 0;
                padding: 10px;
            }

        }


    }

}

`

function CardContactArt({ children}) {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    )
}

export default CardContactArt;