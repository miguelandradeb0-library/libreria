import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/libros">Libros</Link>
        <Link to="/contactanos">Contactanos</Link>
    </header>
  )
}

export default Header