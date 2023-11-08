import React from 'react'
import Header from '../../helpers/Header'
import romance1 from "../../images/romance1.jpg"
import romance2 from "../../images/romance2.jpg"
import romance3 from "../../images/romance3.jpg"
import romance4 from "../../images/romance4.jpg"
import romance5 from "../../images/romance5.jpg"

const Romance = () => {
  return (
    <div>
        <Header />
        <section className="contenedorLibros">
          <section className="opcionLibros">
            <img id="imgLibro" src={romance1} alt="" />
            <p id="informacion">Autor: Joana Marcus(Croos Books)</p>
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>   
          </section>
          <section className="opcionLibros">
            <img id="imgLibro" src={romance2} alt="" />
            <p id="informacion">Autor: Ariana Gandi</p>     
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={romance3} alt="" />
          <p id="informacion">Autor: Margaret Mitchell</p>          
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={romance4} alt="" />
          <p id="informacion">Autor: Patricia Bernito</p>         
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={romance5} alt="" />
          <p id="informacion">Autor: Saray Garcia</p>                     
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          
        </section>
    </div>
  )
}

export default Romance