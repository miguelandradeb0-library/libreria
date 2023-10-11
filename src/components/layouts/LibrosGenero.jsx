import React from 'react'
import Header from '../helpers/Header'
import portada from '../images/portada_ejemplo.jpg'

function LibrosGenero() {
  return (
    <section className='libros'>
        <Header />
    <section className='generos'>
      <section className='imagenes'>
      <section >
        <img src={portada} height={100} width={100} />
      </section>
      <section >
        <img src={portada} height={100} width={100} />
      </section>
      <section >
        <img src={portada} height={100} width={100} />
      </section>
      <section >
        <img src={portada} height={100} width={100} />
      </section>
      <section >
        <img src={portada} height={100} width={100} />
      </section>
      <section >
        <img src={portada} height={100} width={100} />
      </section>
      <section >
        <img src={portada} height={100} width={100} />
      </section>
      <section >
        <img src={portada} height={100} width={100} />
      </section>
    </section>
    </section>
    </section>
  )
}

export default LibrosGenero