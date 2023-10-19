import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
        <button><i><Link to="/">Home</Link></i></button>
        <button><i><Link to="/libros">Libros</Link></i></button>
        <button><i><Link to="/contactanos">Contactanos</Link></i></button>
    </header>
  )
}

export default Header