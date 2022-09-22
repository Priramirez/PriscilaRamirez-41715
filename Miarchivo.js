
// function saludar () { 
//     let nombre = prompt('ingrese su nombre')

//     if (nombre.length === 0) {
//      do {
//         alert('Debe ingresar un nombre para continuar')

//         nombre = prompt('ingrese su nombre'); 
//         }
//     while (nombre.length === 0);
//     }

//     return alert(`Hola ${nombre}, bienvenido a Dragon Market`);
    
// }

// saludar ()

class Dragon {
    constructor(id, tipo, descripcion, producto, precio, img) {
        this.id = id;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.producto = producto;
        this.precio = precio;
        this.img = img;
    }
}

const A = `Aquí colocaré una breve descripcion del dragón y sus caracteristicas para que el comprador 
pueda realizar una comparación y elegir aquél que le resulte más adecuado según sus objetivos como 
coleccionista, entrenador o hechicero.`;

const B = `Aquí colocaré una breve descripcion del dragón y sus caracteristicas para que el comprador 
pueda realizar una comparación y elegir aquél que le resulte más adecuado según sus objetivos como 
coleccionista, entrenador o hechicero.`;

const C = `Aquí colocaré una breve descripcion del dragón y sus caracteristicas para que el comprador 
pueda realizar una comparación y elegir aquél que le resulte más adecuado según sus objetivos como 
coleccionista, entrenador o hechicero.`;

const D = `Aquí colocaré una breve descripcion del dragón y sus caracteristicas para que el comprador 
pueda realizar una comparación y elegir aquél que le resulte más adecuado según sus objetivos como 
coleccionista, entrenador o hechicero.`;



const dragones = [] ;  

const dragon1 = new Dragon(0, 'Dragones Celestiales', A, 'Áragon', 180, 'img/ciruelo 1.jpg');
const dragon2 = new Dragon(1, 'Dragones de magia oscura', B, 'Cynder', 1000, 'img/ciruelo 6.jpg');
const dragon3 = new Dragon(2, 'Dragones Exóticos', C, 'Plutonius', 200, 'img/dragon mariposa.jpg');
const dragon4 = new Dragon(3,'Dragones Guardianes', D, 'Lilith', 300, 'img/ciruelo 2.jpg' );

dragones.push (dragon1, dragon2, dragon3, dragon4);

console.log (dragones);


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

})

const originalCarrito = [];

let dragon = "";
let precio = 0;
let agregarItems = false;
let cantidad = 0;

let boton0 = document.getElementById('addBtn0');
let boton1 = document.getElementById('addBtn1');
let boton2 = document.getElementById('addBtn2');
let boton3 = document.getElementById('addBtn3');


boton0.addEventListener('click', agregar0);
boton1.addEventListener('click', agregar1);
boton2.addEventListener('click', agregar2);
boton3.addEventListener('click', agregar3);

function agregar0() {
    cantidad = prompt('cuántos comprará?');
    dragon = 'ARAGON';
    precio = 180
    originalCarrito.push({dragon,cantidad,precio});
}
function agregar1() {
    cantidad = prompt('cuántos comprará?');
    dragon = 'CYNDER';
    precio = 1000;
    originalCarrito.push({dragon,cantidad,precio});
}
function agregar2() {
    cantidad = prompt('cuántos comprará?');
    dragon = 'PLUTONIUS';
    precio = 200
    originalCarrito.push({dragon,cantidad,precio});
}
function agregar3() {
    cantidad = prompt('cuántos comprará?');
    dragon = 'LILITH'
    precio = 300;
    originalCarrito.push({dragon,cantidad,precio});
}

console.log(originalCarrito);



function chango() {

    const carrito0 = originalCarrito.map( (elemento) => { 
        return { 
            nombre: elemento.dragon,
            precio: elemento.precio,
            cantidad: elemento.cantidad
        }
    })
    
    console.log (carrito0);

    const nombres0 = [];
    const precios0 = [];
    const cantidades0 = [];

    for (const n of carrito0) {
    nombres0.push (n.nombre);
    precios0.push (n.precio*n.cantidad).toFixed();
    cantidades0.push(n.cantidad);
    }
    
    console.log(nombres0);

    let consulta = false;

    consulta = confirm(`Usted está comprando: 
    Dragon: ${nombres0.join(',')}
    Cantidades: ${cantidades0.join(',')}
    Precios: ${precios0.join(' gemas, ')}
    ¿desea modificar su compra?`);

    if(consulta) {
        
        do {
            posicion = nombres0.indexOf(String(prompt('indique el nombre del dragón desea eliminar').toUpperCase()));
            if (posicion != -1) {   

                nombres0.splice(posicion,1);
                precios0.splice(posicion,1);
                cantidades0.splice(posicion,1);

                alert(`Usted está comprando: 
                    Dragon: ${nombres0.join(',')}
                    Cantidades: ${cantidades0.join(',')}
                    Precios: ${precios0.join(' gemas, ')} `);
                    }
            else { 
                    alert('No existe ese elemento.');
                }
            }
            while ((confirm('Desea realizar más cambios a su compra?')))
        }


        let finalizar = confirm('Finalizar compra');

        if (finalizar) {
        
            const montoFinal = precios0.reduce((acc,p) => acc+p,0);
         
            let revision = confirm('Desea revisar su compra?');
        
            if (revision) {
        
                alert(`Usted adquirió: 
                        Dragon: ${nombres0.join(',')}
                        Cantidades: ${cantidades0.join(',')}
                        Precios:  ${precios0.join(' gemas, ')} gemas
                        
                        Monto final: ${montoFinal} gemas`);
                    
            }
            else {
                alert (`Monto total: ${montoFinal}  gemas.
                ¡Gracias por su compra!`);
            }
        } 
        else {
            alert('Compra cancelada');
        }
    }



let carritoBtn = document.getElementById('verCarrito');

carritoBtn.addEventListener('click', chango);



    



