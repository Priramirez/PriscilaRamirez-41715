
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
                                    <button class="boton" type="button" id="addBtn" >Adquirir</button>
                            </div>
            </article>
    </section>`;

contenedor.appendChild(section);

})



// const originalCarrito = [];

// let dragon = "";
// let precio = 0;
// let agregarItems = false;
// let cantidad = 0;

// do {
//     dragon = prompt(`Contamos con los siguientes dragones:
//     1-Áragon
//     2-Cynder
//     3-Lilith
//     4-Plutonius

//     ¿Qué dragon desea adquirir? `).toUpperCase();
//     cantidad = prompt(`¿Cuántos dragones llevará? `);

//     switch(dragon) {
//         case "ÁRAGON" :
//         precio = 180;
//         break;

//         case "ARAGON" :
//         precio = 180;
//         break;

//         case "CYNDER" :
//         precio = 1000;
//         break;

//         case "PLUTONIUS" :
//         precio = 200;
//         break;

//         case "LILITH" :
//         precio = 300;
//         break;

//         default :
//         alert('No contamos con el dragón mencionado. Por favor, escriba otro nombre')
//         precio = 0;
//         cantidad = 0;

//     }


// agregarItems = confirm("Desea agregar más productos al carrito?");

// originalCarrito.push({dragon,cantidad,precio});

// }
// while(agregarItems);


// const carrito = originalCarrito.map( (elemento) => { 
//     return { 
//         nombre: elemento.dragon,
//         precio: (elemento.precio*1.21).toFixed(),
//         cantidad: elemento.cantidad
//     }
// })

// console.log (carrito);


// alert('Impuesto Aldeano: 1,21%');

// let descuento = false;
// descuento = confirm('Tiene un cupón de descuento? ...("PRI")... *guiño* *guiño*');

// let carrito1 = [];


//     if (descuento) {

//         let valido = false;

//         do {
//             let cupon = "";
//             cupon = prompt('ingrese aquí su cupon:').toUpperCase();

//             if (cupon == "PRI") {
//                 carrito1 = carrito.map( (b) => {
//                     return {
//                         nombre: b.nombre,
//                         precio: (b.precio*0.70).toFixed(),
//                         cantidad: b.cantidad
//                     }
//                 })
//                     alert( 'Su cupón es válido. Recibe un 30% de descuento en su compra!');
//                 } else {
//                         alert('Cupón no válido. Vuelva a ingresarlo');
//                         valido = true;
//                         carrito1 = carrito.map( (c) => {
//                             return {
//                                 nombre: c.nombre,
//                                 precio: c.precio,
//                                 cantidad: c.cantidad
//                             }
//                         })
//                     }
//         } while (valido);
//     } else {
//         carrito1 = carrito.map( (d) => {
//             return {
//                 nombre: d.nombre,
//                 precio: d.precio,
//                 cantidad: d.cantidad
//             }
//         })
//     }

// const nombres = [];
// const precios = [];
// const cantidades = [];

// for (const n of carrito1) {
//     nombres.push (n.nombre);
//     precios.push (n.precio*n.cantidad).toFixed();
//     cantidades.push(n.cantidad);
// }


// console.log(nombres);
// console.log(precios);
// console.log(cantidades);

// let consulta = false;
// consulta = confirm(`Usted está comprando: 
// Dragon: ${nombres.join(',')}
// Cantidades: ${cantidades.join(',')}
// Precios: ${precios.join(' gemas, ')}
// ¿desea modificar su compra?`);

//     if(consulta) {
    
//         do {
//             posicion = nombres.indexOf(String(prompt('indique el nombre del dragón desea eliminar').toUpperCase()));
//             if (posicion != -1) {

//                 nombres.splice(posicion,1);
//                 precios.splice(posicion,1);
//                 cantidades.splice(posicion,1);

//                 alert(`Usted está comprando: 
//                 Dragon: ${nombres.join(',')}
//                 Cantidades: ${cantidades.join(',')}
//                 Precios: ${precios.join(' gemas, ')} `);
//                 }
//                 else { 
//                     alert('No existe ese elemento.');
//             }
//         }
//         while ((confirm('Desea realizar más cambios a su compra?')))
//     }



// let finalizar = confirm('Finalizar compra');

// if (finalizar) {

//     const montoFinal = precios.reduce((acc,p) => acc+p,0);
 
//     let revision = confirm('Desea revisar su compra?');

//     if (revision) {

//         alert(`Usted adquirió: 
//                 Dragon: ${nombres.join(',')}
//                 Cantidades: ${cantidades.join(',')}
//                 Precios: ( ${precios.join(' gemas, ')} ) gemas
                
//                 Monto final (incluye impuestos y descuentos): ${montoFinal}`);
            
//     }
//     else {
//         alert (`Monto total: ${montoFinal}  gemas.
//         ¡Gracias por su compra!`);
//     }
// } 
// else {
//     alert('Compra cancelada');
// }
