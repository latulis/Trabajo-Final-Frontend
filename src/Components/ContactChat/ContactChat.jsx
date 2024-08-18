import React from 'react';
import { Link } from 'react-router-dom';

const ContactChat = ({ contacto }) => {
    const { nombre, thumbnail, ultima_conexion, id, mensajes = [] } = contacto;

    const lastMessage = mensajes.length > 0 ? mensajes[mensajes.length - 1] : { text: "No Hay mensajes todavia", author: '' };

    const obtenerUltimoMensaje = () => {
        if (lastMessage.author === 'Tu') {
            return `Tu : ${lastMessage.text}`;
        } else {
            return lastMessage.text;
        }
    };

    return (
        <Link to={`/chat/${id}`} className='contactChatLink'>
            <img src={thumbnail} alt={nombre} />
            <div className='contactChatInfo'>
                <h3>{nombre}</h3>
                <span className='lastMessage'>{obtenerUltimoMensaje()}</span>
            </div>
            <span className='lastDay'>{ultima_conexion}</span>
            <hr />
        </Link>
    );
};

export default ContactChat;
