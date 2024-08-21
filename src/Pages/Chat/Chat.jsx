import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerContactoporId } from '../../Helpers/ObtenerContacto'
import { MessagesChat , FormCraerMensaje } from '../../Components'
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
        <MessagesChat contacto={contacto} />
        </div>
        <FormCraerMensaje contacto={contacto} />
        



    </div>

    </div>
  )
}

export default Chat
