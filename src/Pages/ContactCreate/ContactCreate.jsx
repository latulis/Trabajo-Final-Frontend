import React from 'react';
import './ContactCreate.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/GlobalContext';

const ContactCreate = () => {
    const { handleCreateContact, error } = useGlobalContext();
    return (
        <div className='container'>
            <form className='contactCreateForm' onSubmit={handleCreateContact}>
                <header className='headerCreate'>
                    <Link to={`/`} className='atrasChat'><i className="bi bi-arrow-left-circle-fill"></i></Link>
                    <h1>Crear Contacto</h1>
                </header>
                
                <br />
                <br />
                <label htmlFor="nombre">Nombre de Contacto:</label>
                <input type="text" id='nombre' name='nombre' placeholder='Nombre y Apellido' />
                <label htmlFor="cellphone">Teléfono:</label>
                <input type="text" id='cellphone' name='cellphone' placeholder='Celular' />
                <label htmlFor="thumbnail">Link de Imagen:</label>
                <input type="text" id='thumbnail' name='thumbnail' placeholder='URL' />
                <input type="submit" value="Crear Contacto" className="butonsubmit" id="butonsubmit" />

                {error && <span className="error">{error}</span>}
            </form>
        </div>
    );
}

export default ContactCreate;
