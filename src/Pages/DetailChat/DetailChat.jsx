import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailChat.css';
import { obtenerContactoporId } from '../../Helpers/ObtenerContacto';
import { useGlobalContext } from '../../Context/GlobalContext';

const DetailChat = () => {
  const { handleDeleteContact } = useGlobalContext();
  const { contacto_id } = useParams();
  const contacto = obtenerContactoporId(contacto_id);

  if (!contacto) {
    return <div>Contacto no encontrado</div>;
  }

  return (
    <div className='container'>
      <div className='detailChat'>
        <header className='headerDetailChat'>
          <Link to={`/chat/${contacto.id}`} className='atrasChat'>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </Link>
          <h3 className='headerTitle'>Info de contacto</h3>
        </header>
        <img src={contacto.thumbnail} alt={contacto.nombre} />
        <h2>{contacto.nombre}</h2>
        <span>{contacto.cellphone}</span>
        <p>{contacto.descripcion}</p>
        <Link to={`/editcontact/${contacto.id}`} className='buttonEditarContacto'>Editar Contacto</Link>
        <button className='buttonEliminarContacto' onClick={() => handleDeleteContact(contacto.id)}>Eliminar Contacto</button>
      </div>
    </div>
  );
};

export default DetailChat;
