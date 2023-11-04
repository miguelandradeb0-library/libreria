import React from 'react'
import Header from '../../helpers/Header'
import fantasia1 from "../../images/fantasia1.jpg"
import fantasia2 from "../../images/fantasia2.jpg"
import fantasia3 from "../../images/fantasia3.jpg"
import fantasia4 from "../../images/fantasia4.jpg"
import fantasia5 from "../../images/fantasia5.jpg"

const Fantasia = () => {
  return (
    <div>
        <Header />
        <section className="contenedorLibros">
          <section className="opcionLibros">
            <img id="imgLibro" src={fantasia1} alt="" />
            <p id="informacion">Autor: Brandon Sanderson(Croos Books)</p>
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>   
          </section>
          <section className="opcionLibros">
            <img id="imgLibro" src={fantasia2} alt="" />
            <p id="informacion">Autor: Alejandro Pinzon</p>     
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={fantasia3} alt="" />
          <p id="informacion">Autor: Gabriel Sanchez</p>          
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={fantasia4} alt="" />
          <p id="informacion">Autor: Elise Kova</p>         
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={fantasia5} alt="" />
          <p id="informacion">Autor: George Martin</p>                     
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          
        </section>
    </div>
  )
}

export default Fantasia