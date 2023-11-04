import React from 'react'
import Header from '../../helpers/Header'
import infantil1 from "../../images/infantil1.jpg"
import infantil2 from "../../images/infantil2.jpg"
import infantil3 from "../../images/infantil3.jpg"
import infantil4 from "../../images/infantil4.jpg"
import infantil5 from "../../images/infantil5.jpg"

const Infantil = () => {
  return (
    <div>
        <Header />
        <section className="contenedorLibros">
          <section className="opcionLibros">
            <img id="imgLibro" src={infantil1} alt="" />
            <p id="informacion">Autor: Hermanos Grimm(Croos Books)</p>
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>   
          </section>
          <section className="opcionLibros">
            <img id="imgLibro" src={infantil2} alt="" />
            <p id="informacion">Autor: Hermanos Grimm</p>     
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={infantil3} alt="" />
          <p id="informacion">Autor: Hermanos Grimm</p>          
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={infantil4} alt="" />
          <p id="informacion">Autor: Hermanos Grimm</p>         
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={infantil5} alt="" />
          <p id="informacion">Autor: Hermanos Grimm</p>                     
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          
        </section>
    </div>
  )
}

export default Infantil