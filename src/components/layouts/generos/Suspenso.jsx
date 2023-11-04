import React from 'react'
import Header from '../../helpers/Header'
import terror1t from "../../images/terror1t.jpg"
import terror2t from "../../images/terror2t.jpg"
import terror3t from "../../images/terror3t.jpg"
import terror4t from "../../images/terror4t.jpg"
import terror5t from "../../images/terror5t.jpg"

const Suspenso = () => {
  return (
    <div>
        <Header />
        <section className="contenedorLibros">
          <section className="opcionLibros">
            <img id="imgLibro" src={terror1t} alt="" />
            <p id="informacion">Autor: J. D. Barker(Croos Books)</p>
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>   
          </section>
          <section className="opcionLibros">
            <img id="imgLibro" src={terror2t} alt="" />
            <p id="informacion">Autor: Adrian Arango</p>     
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={terror3t} alt="" />
          <p id="informacion">Autor: Carmen Mola</p>          
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={terror4t} alt="" />
          <p id="informacion">Autor: Cesar Perez</p>         
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={terror5t} alt="" />
          <p id="informacion">Autor: Paula Hawkings</p>                     
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          
        </section>
    </div>
  )
}

export default Suspenso