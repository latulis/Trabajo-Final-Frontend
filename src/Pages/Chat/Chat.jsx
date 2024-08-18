import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerContactoporId } from '../../Helpers/ObtenerContacto'

import { DATA_CONTACTOS } from '../../data/datacontactos'
import { Link } from 'react-router-dom'
import './Chat.css'
import { useGlobalContext } from '../../Context/GlobalContext'

const Chat = () => {
  const parametros = useParams()
  console.log(parametros)
  const contacto = obtenerContactoporId((parametros.contacto_id))
  const { handleCreateMessage} = useGlobalContext()

  if (!contacto) {
    return <div>Contacto no encontrado</div>
  }

  const mensajes = contacto.mensajes ? contacto.mensajes.map((mensaje, index) => {
    if (mensaje.author === 'Tu') {
        return (
            <div className='mensajeTu' key={index}>
                <h3>{mensaje.author}</h3>
                <p>{mensaje.text}</p>
                <div className='fechadeMensaje'>
                    <div className='estado'>{mensaje.estado}</div>
                    <div className='hour'>{mensaje.hour}</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='mensajeOtro' key={index}>
                <h3>{contacto.nombre}</h3>
                <p>{mensaje.text}</p>
                <div className='fechadeMensaje'>
                    <div className='estado'>{mensaje.estado}</div>
                    <div className='hour'>{mensaje.hour}</div>
                </div>
            </div>
        )
    }
}) : [];

  return (
    <div className='container'>
    <div className='chatEntero'>
      <Link to={`/detailchat/${contacto.id}`} className='headerChat'>
        <div className='imgIcon'><Link to={`/`}>
        <button className='atrasChat'><i class="bi bi-arrow-left-circle-fill"></i></button>
        
        </Link>
        <img src={contacto.thumbnail} alt="" /></div>
        
        <h2>{contacto.nombre}</h2>
        </Link>
        <div className='mensajesWsp'>
        {mensajes}
        </div>
        <form className="footerChat" onSubmit={(e) => handleCreateMessage(e, contacto.id)}>
    <textarea 
        className="inputChat" 
        name="mensajeTexto"
        placeholder="Escribe un mensaje..."
        onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleCreateMessage(e, contacto.id);
            }
        }}
    ></textarea>
    
    <button 
        type="submit" 
        className="enviarChat"
    >
        <i className="bi bi-send"></i>
    </button>
</form>



    </div>

    </div>
  )
}

export default Chat
