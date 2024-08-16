import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { obtenerContacto, crearContacto, guardarContactos, eliminarContacto } from "../Helpers/ObtenerContacto";
import { v4 as uuid } from 'uuid';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [contactos, setContactos] = useState(() => obtenerContacto() || []); 
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const contactosOriginales = obtenerContacto() || [];
        if (searchTerm !== '') {
            const contactosFiltrados = contactosOriginales.filter(contacto =>
                contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setContactos(contactosFiltrados);
        } else {
            setContactos(contactosOriginales);
        }
    }, [searchTerm]);

    const handleCreateContact = (e) => {
        e.preventDefault();

        const formulario = e.target;
        const formularioValores = new FormData(formulario);

        const newContact = {
            nombre: formularioValores.get('nombre').trim(),
            thumbnail: formularioValores.get('thumbnail').trim(),
            cellphone: formularioValores.get('cellphone').trim(),
            ultima_conexion: 'ayer',
            id: uuid(),
            mensajes: []
        };

        if (newContact.nombre && newContact.cellphone && newContact.thumbnail) {
            const updatedContacts = [...contactos, newContact];
            setContactos(updatedContacts);
            crearContacto(newContact);
            guardarContactos(updatedContacts); 
            navigate('/');
        } else {
            <span className="error">Todos los campos son obligatorios</span>;
        }
    };

    const handleCreateMessage = (e, id) => {
        e.preventDefault();

        const formulario = e.target;
        const formularioValores = new FormData(formulario);

        const newMessage = {
            text: formularioValores.get('mensajeTexto').trim(),
            author: 'Tu',
            hour: 'ahora',
            day: 'hoy',
            estado: 'Enviado',
        };

        if (newMessage.text) {
            const updatedContacts = contactos.map((contacto) => {
                if (contacto.id === id) {
                    return {
                        ...contacto,
                        mensajes: [...contacto.mensajes, newMessage]
                    };
                }
                return contacto;
            });

            setContactos(updatedContacts);
            guardarContactos(updatedContacts);
            formulario.reset();
        }
    };

    const handleDeleteContact = (id) => {
        const updatedContacts = contactos.filter((contacto) => contacto.id !== id);
        setContactos(updatedContacts);
        guardarContactos(updatedContacts);
        navigate('/');
    };
    const handleEditContact = (e, contactoid) => {
        e.preventDefault();
        
    
        const formulario = e.target;
        const formularioValores = new FormData(formulario);
    
        const updatedContact = {
            nombre: formularioValores.get('nombre').trim(),
            thumbnail: formularioValores.get('thumbnail').trim(),
            cellphone: formularioValores.get('cellphone').trim(),
            ultima_conexion: 'ayer',
            id: contactoid, // Mantiene el mismo ID
        };
    
        if (updatedContact.nombre && updatedContact.cellphone && updatedContact.thumbnail) {
            const updatedContacts = contactos.map((contacto) => 
                contacto.id === contactoid ? { ...contacto, ...updatedContact } : contacto
            );

    
            setContactos(updatedContacts);

            eliminarContacto(contactoid);
            
            guardarContactos(updatedContacts); 
            
            navigate(`/detailchat/${contactoid}`);
        } else {
            console.log("Todos los campos son obligatorios");
        }
    };
    
    return (
        <GlobalContext.Provider value={{
            handleCreateContact,
            handleCreateMessage,
            handleDeleteContact,
            handleChangeSearchTerm,
            handleEditContact,
            searchTerm,
            contactos  ,
            
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

