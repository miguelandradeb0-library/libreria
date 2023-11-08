import React from 'react'
import Header from '../../helpers/Header'
import accion1 from "../../images/accion1.jpg"
import accion2 from "../../images/accion2.jpg"
import accion3 from "../../images/accion3.jpg"
import accion4 from "../../images/accion4.jpg"
import accion5 from "../../images/accion5.jpg"

const Accion = () => {
  return (
    <div>
        <Header />
        <section className="contenedorLibros">
          <section className="opcionLibros">
            <img id="imgLibro" src={accion1} alt="" />
            <p id="informacion">Autor: Carlos Ruizzafon(Croos Books)</p>
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>   
          </section>
          <section className="opcionLibros">
            <img id="imgLibro" src={accion2} alt="" />
            <p id="informacion">Autor: Adrian Arango</p>     
            <section id="opcion">  
              <button id="comprar"><h2 >Comprar</h2></button>
              <button id="prestamo"><h2>Prestamo</h2></button>
            </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={accion3} alt="" />
          <p id="informacion">Autor: Juan Gomez</p>          
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={accion4} alt="" />
          <p id="informacion">Autor: Javier Ibarz</p>         
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          <section className="opcionLibros">
          <img id="imgLibro" src={accion5} alt="" />
          <p id="informacion">Autor: Desiree Matas</p>                     
          <section id="opcion">  
            <button id="comprar"><h2 >Comprar</h2></button>
            <button id="prestamo"><h2>Prestamo</h2></button>
          </section>  
          </section>
          
        </section>
        
    </div>
  )
}

export default Accion