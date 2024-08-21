import React from 'react';
import { useGlobalContext } from '../../Context/GlobalContext';

const FormCraerMensaje = ({ contacto }) => {
  const { handleCreateMessage } = useGlobalContext();

  return (
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
  );
}

export default FormCraerMensaje;
