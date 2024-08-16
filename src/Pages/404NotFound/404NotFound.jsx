import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>No existe nada en esta ruta</h2>
        <Link to = {`/`}> Volver al inicio</Link>
    </div>
    
  )
}

export default NotFound
