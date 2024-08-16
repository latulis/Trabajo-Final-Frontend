import React from 'react'
import ContactChat from '../ContactChat/ContactChat'

const ContactList = ({contactos}) => {
  return (
    <div>
        {
            contactos.map((contacto)=>{
              return <ContactChat key={contacto.id} contacto={contacto} />;
            })
        }
      
    </div>
  )
}

export default ContactList
