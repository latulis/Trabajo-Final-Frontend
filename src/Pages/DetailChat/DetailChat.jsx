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
        <div className='atrasChat'>
          <Link to={`/chat/${contacto.id}`}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </Link>
          <h3>Info de contacto</h3>
        </div>
        <img src={contacto.thumbnail} alt={contacto.nombre} />
        <h2>{contacto.nombre}</h2>
        <span>{contacto.cellphone}</span>
        <p>{contacto.descripcion}</p>
        <Link to={`/editcontact/${contacto.id}`} className='editarContacto'>Editar Contacto</Link>
        <button className='eliminarContacto' onClick={() => handleDeleteContact(contacto.id)}>Eliminar Contacto</button>
      </div>
    </div>
  );
};

export default DetailChat;
