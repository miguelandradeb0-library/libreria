import React from 'react'
import Header from '../../helpers/Header'
import aventura1 from "../../images/aventura1.jpg"
import aventura2 from "../../images/aventura2.jpg"
import aventura3 from "../../images/aventura3.jpg"
import aventura4 from "../../images/aventura4.jpg"
import aventura5 from "../../images/aventura5.jpg"

const Aventura = () => {
  return (
    <div>
        <Header />
        <section className="contenedorLibros">
          <section className="opcionLibros">
            <img id="imgLibro" src={aventura1} alt="" />
            <p id="informacion">Autor: George Martin(Croos Books)</p>
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>   
          </section>
          <section className="opcionLibros">
            <img id="imgLibro" src={aventura2} alt="" />
            <p id="informacion">Autor: L. Frank Baum</p>     
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={aventura3} alt="" />
          <p id="informacion">Autor: Julio Verne</p>          
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={aventura4} alt="" />
          <p id="informacion">Autor: Robert Louis</p>         
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={aventura5} alt="" />
          <p id="informacion">Autor: Juan Gomez</p>                     
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          
        </section>
    </div>
  )
}

export default Aventura