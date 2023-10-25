import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/libros">Books</Link></button>
        <button><Link to="/contactanos">Contact us</Link></button>
        <button><Link to="/login">Log out</Link></button>
    </header>
  )
}

export default Header