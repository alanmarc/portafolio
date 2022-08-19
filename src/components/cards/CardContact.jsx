import React from 'react'
import CardContactArt from '../../styles/cardContact-art'

export const CardContact = () => {
  return (
    <CardContactArt>
        <section className='container-contact'>
          <div className='img-contact'>
            <img src="https://img.icons8.com/color-glass/400/000000/send-mass-email.png"/>
          </div>
          <div className='container-form'>
            <div className='container-social'>
              <div className='social'>
                  <a href='https://github.com/alanmarc' target="_Blank">
                      <img src='https://img.icons8.com/ios-filled/100/000000/github.png'/>
                      <p>Github</p>
                  </a>
                  <a href='https://www.linkedin.com/in/alan-marcos-807027228' target="_Blank">
                      <img src='https://img.icons8.com/ios-filled/100/000000/linkedin.png'/>
                      <p>Linkedin</p>
                  </a>
              </div>
              <div className='social'>
                  <a href='mailto:alanmarcs96@gmail.com'>
                      <img src='https://img.icons8.com/external-sbts2018-solid-sbts2018/100/000000/external-mail-ecommerce-basic-1-sbts2018-solid-sbts2018.png'/>
                      <p>Correo</p>
                  </a>
                  <a href='https://t.me/Alanmarjs' target="_Blank">
                      <img src='https://img.icons8.com/ios-filled/100/000000/telegram-app.png' />
                      <p>Telegram</p>
                  </a>
              </div>
            </div>
            <div className='form-contact'>
              <form>
                <p>Dejame un mensaje y me comunicare contigo en la brevedad posible</p>
                <label>Nombre</label>
                <input/>
                <label>Correo</label>
                <input/>
                <label>Número Telefonico</label>
                <input/>
                <label>Mensaje</label>
                <textarea className='input-message'/>
                <button >Enviar</button>
              </form>
            </div>
          </div>
      </section>
    </CardContactArt>
  )
}
