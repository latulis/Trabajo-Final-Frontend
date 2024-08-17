import React from 'react'
import { ContactList } from '../../Components'
import { Link } from 'react-router-dom'
import './Contacts.css'
import { useGlobalContext } from '../../Context/GlobalContext'

const Contacts = () => {
  const { handleChangeSearchTerm, searchTerm, contactos } = useGlobalContext();

  console.log(contactos)
  
  return (
    <div className='container'>
      <div className='listaEntera'>
        <header className='headerContactList'>
          <div>
            <h2>Chats</h2>
            <label htmlFor="nombre"></label>
            <input 
              onChange={handleChangeSearchTerm} 
              value={searchTerm} 
              type="text" 
              name='nombre' 
              placeholder='Buscar'
            />
          </div>
          <Link to='/contactcreate' className='contactCreate'>Crear Contacto</Link>
          <Link to='/review' className='contactCreate'>Review</Link>
        </header> 
        <div className='contactList'>
          <ContactList contactos={contactos} />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
