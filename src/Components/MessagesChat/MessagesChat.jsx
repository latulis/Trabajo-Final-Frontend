import React from 'react';

const MessagesChat = ({ contacto }) => {
    return (
        <div className='mensajero'>
            {contacto.mensajes && contacto.mensajes.map((mensaje, index) => {
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
                    );
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
                    );
                }
            })}
        </div>
    );
};

export default MessagesChat;
