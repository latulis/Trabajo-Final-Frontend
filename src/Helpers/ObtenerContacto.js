import { DATA_CONTACTOS } from "../data/datacontactos";






export const guardarContactos = (contactos) => {
    const contactosJson = JSON.stringify(contactos)
    localStorage.setItem('contactos', contactosJson) 
}

export const obtenerContactoporId = (id) => {
    const contactos = obtenerContacto()
    return contactos.find(contacto => (contacto.id) == id)
}



export const obtenerContacto = () => {
    const contactosGuardados = localStorage.getItem('contactos')
    if(contactosGuardados){

        return JSON.parse(contactosGuardados)
    }
    else{

        guardarContactos(DATA_CONTACTOS)
        return DATA_CONTACTOS
    }
}

export const crearContacto = (nuevoContacto) => {
    const contactos = obtenerContacto();
    contactos.push(nuevoContacto);
    guardarContactos(contactos);
};


export const obtenerMensajes = (id) => {
    const contactos = obtenerContacto()
    return contactos.find(contacto => (contacto.id) == id).mensajes
}


export const eliminarContacto = (id) => {
    const contactos = obtenerContacto()
    const contactosActualizados = contactos.filter(contacto => (contacto.id) != id)
    guardarContactos(contactosActualizados)
}
