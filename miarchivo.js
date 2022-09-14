
function saludar () { 
    let nombre = prompt('ingrese su nombre')

    if (nombre.length === 0) {
     do {
        alert('Debe ingresar un nombre para continuar')

        nombre = prompt('ingrese su nombre'); 
        }
    while (nombre.length === 0);
    }

    return alert(`Hola ${nombre}, bienvenido a Dragon Market`);
    
}

saludar ()

class Dragon {
    constructor(producto, precio, cantidad) {
        this.producto = producto;
        this.precio = precio;
    }
}


const dragones = [] ;  

const dragon1 = new Dragon('Áragon', 180);
const dragon2 = new Dragon('Cynder', 1000);
const dragon3 = new Dragon('Plutonius', 200);

dragones.push (dragon1, dragon2, dragon3);

console.log (dragones);

let carrito = [];
let dragon = "";
let precio = 0;
let agregarItems = false;
let cantidad = 0;
let total = 0;

do {
    dragon = prompt('Qué dragon desea adquirir?: ').toUpperCase();
    cantidad = prompt('Cuántos dragones llevará?: ');

    switch(dragon) {
        case "ÁRAGON" :
        precio = 180;
        break;

        case "ARAGON" :
        precio = 180;
        break;

        case "CYNDER" :
        precio = 1000;
        break;

        case "PLUTONIUS" :
        precio = 200;
        break;

        default :
        alert('No contamos con el dragón mencionado. Por favor, escriba otro nombre')
        precio = 0;
        cantidad = 0;

    }


agregarItems = confirm("Desea agregar más productos al carrito?");

carrito.push({dragon,cantidad,precio});

}
while(agregarItems);

if (confirm('Desea revisar su compra?')) {
    for (const compra of carrito) {
        alert('Dragón: '+compra.dragon+
        ' Cantidad: '+compra.cantidad+
        ' Monto final: '+compra.cantidad*compra.precio+' gemas');
    }
} else {
    alert ('Gracias por su compra');
}
