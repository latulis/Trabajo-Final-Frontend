import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './EditContact.css';
import { obtenerContactoporId } from '../../Helpers/ObtenerContacto';
import { useGlobalContext } from '../../Context/GlobalContext';


const EditContact = () => {
  const { contacto_id } = useParams(); 
  const contacto = obtenerContactoporId(contacto_id);
  const {handleEditContact, error} = useGlobalContext();

  if (!contacto) {
    return <div>Contacto no encontrado</div>;
  }

  return (
    <div className='container'>
      <div className='editContact'>
        <header className='headerEditContact'>
          <Link to={`/detailchat/${contacto.id}`} className='atrasChat'>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </Link>
          <h3 className='titleEditContact'>Editar Contacto</h3>
        </header>
        <form className='formEdit' onSubmit={(e) => handleEditContact(e, contacto.id)}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name='nombre' defaultValue={contacto.nombre} />
          <label htmlFor="cellphone">Celular</label>
          <input type="text" id="cellphone" name='cellphone' defaultValue={contacto.cellphone} />
          <label htmlFor="thumbnail">Url de imagen</label>
          <input type="text" id="thumbnail" name='thumbnail' defaultValue={contacto.thumbnail} />
          <button type='submit'>Guardar cambios</button>
          {error && <span className="error">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default EditContact;
