import React from 'react'
import Header from '../helpers/Header'
import portada from '../images/portada_ejemplo.jpg'
import { Link } from 'react-router-dom'
import terrorImagen from '../images/taller-de-terror.jpg'
import suspenso from '../images/suspenso.jpg'
import romance from '../images/romance.jpg'
import infantil from '../images/infantil.jpg'
import fantasia from '../images/fantasia.jpg'
import descarga from '../images/dramas.jpg'
import aventura from '../images/aventura.jpg'
import accion from '../images/accion.jpg'


function LibrosGenero() {
  return (
    <section>
      <Header />
      <section className='generos'>
        <section className='parteArriba'>
          <section className='librosCoverUno'>
            
            <img src={terrorImagen} height={150} width={200} />
            <button className='botonGenero'><Link to='/terror'><h1>TERROR</h1></Link></button>
          </section>
          <section className='librosCoverDos'>
          
            <img src={suspenso} height={150} width={200} />
            <button className='botonGenero'><Link to='/suspenso'><h1>SUSPENSO</h1></Link></button>
          </section>
          <section className='librosCoverTres'>
          
            <img src={romance} height={150} width={200} />
            <button className='botonGenero'><Link to='/romance'><h1>ROMANCE</h1></Link></button>
          </section>
          <section className='librosCoverCuatro'>
          
            <img src={infantil} height={150} width={200} />
            <button className='botonGenero'><Link to='/infantil'><h1>INFANTIL</h1></Link></button>
          </section>
        </section>
        <section className='parteAbajo'>
          <section className='librosCoverQuinto'>
          
            <img src={fantasia} height={150} width={200} />
            <button className='botonGenero'><Link to='/fantasia'><h1>FANTASIA</h1></Link></button>
          </section>
          <section className='librosCoverSexto'>
          
            <img src={descarga} height={150} width={200} />
            <button className='botonGenero'><Link to='/drama'><h1>DRAMA</h1></Link></button>
          </section>
          <section className='librosCoverSeptimo'>
          
            <img src={aventura} height={150} width={200} />
            <button className='botonGenero'><Link to='/aventura'><h1>AVENTURA</h1></Link></button>
          </section>
          <section className='librosCoverOctavo'>
            
            <img src={accion} height={150} width={200} />
            <button className='botonGenero'><Link to='/accion'><h1>ACCION</h1></Link></button>
          </section>
        </section>
      </section>
    </section>
  )
}

export default LibrosGenero
