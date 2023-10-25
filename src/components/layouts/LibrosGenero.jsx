import React from 'react'
import Header from '../helpers/Header'
import portada from '../images/portada_ejemplo.jpg'

function LibrosGenero() {
  return (
    <section className='libros'>
      <Header />
      <section className='generos'>
        <section className='parteArriba'>
          <section className='librosCoverUno'>
            <img src={portada} height={100} width={100} />
            <h1>Hola mundo</h1>
          </section>
          <section className='librosCoverDos'>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverTres'>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverCuatro'>
            <img src={portada} height={100} width={100} />
          </section>
        </section>
        <section className='parteAbajo'>
          <section className='librosCoverQuinto'>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverSexto'>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverSeptimo'>
            <img src={portada} height={100} width={100} />
          </section>
          <section className='librosCoverOctavo'>
            <img src={portada} height={100} width={100} />
          </section>
        </section>
      </section>
    </section>
  )
}

export default LibrosGenero