
import { dragones } from './src/stock.js';

console.log (dragones);

import { validarProductoCarrito } from "./accionesCarrito.js";
const mostrarDragones = (dragones) => {

const contenedor = document.getElementById('producto-contenedor');

dragones.forEach( prod => {

    const section = document.createElement('section');
    section.classList.add('section-box');
    section.innerHTML =
    `<section class="section">
            <article class="post">
                    <h2>${prod.tipo}</h2>
                    <img src="${prod.img}"/>
            
                            <div class="caption"> 
                                    <h3>${prod.producto}</h3>
                                    <p>
                                    ${prod.descripcion}
                                    </p>
                                    <br>
                                    <h4>${prod.precio}</h4>
                                    <br> 
                                    <button class="boton" type="button" id="addBtn${prod.id}" >Adquirir</button>
                            </div>
            </article>
    </section>`;

contenedor.appendChild(section);

const boton = document.getElementById(`addBtn${prod.id}`);
boton.addEventListener('click', () => {
    validarProductoCarrito(prod.id);
}); 

});
};





    



