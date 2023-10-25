import React from 'react'
import Header from '../helpers/Header'
import portada from '../images/portada_ejemplo.jpg'
import { Link } from 'react-router-dom'


function LibrosGenero() {
  return (
    <section>
      <Header />
      <section className='generos'>
        <section className='parteArriba'>
          <section className='librosCoverUno'>
            <Link to='/terror'><h1>Terror</h1></Link>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverDos'>
          <Link to='/suspenso'><h1>Suspenso</h1></Link>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverTres'>
          <Link to='/romance'><h1>Romance</h1></Link>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverCuatro'>
          <Link to='/infantil'><h1>Infantil</h1></Link>
            <img src={portada} height={100} width={100} />
          </section>
        </section>
        <section className='parteAbajo'>
          <section className='librosCoverQuinto'>
          <Link to='/fantasia'><h1>Fantasia</h1></Link>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverSexto'>
          <Link to='/drama'><h1>Drama</h1></Link>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverSeptimo'>
          <Link to='/aventura'><h1>Aventura</h1></Link>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverOctavo'>
            <Link to='/accion'><h1>Accion</h1></Link>
            <img src={portada} height={100} width={100} />
          </section>
        </section>
      </section>
    </section>
  )
}

export default LibrosGenero
