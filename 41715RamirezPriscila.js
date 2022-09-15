
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
    constructor(producto, precio) {
        this.producto = producto;
        this.precio = precio;
    }
}


const dragones = [] ;  

const dragon1 = new Dragon('Áragon', 180);
const dragon2 = new Dragon('Cynder', 1000);
const dragon3 = new Dragon('Plutonius', 200);
const dragon4 = new Dragon('Lilith', 300);

dragones.push (dragon1, dragon2, dragon3, dragon4);

console.log (dragones);

const originalCarrito = [];

let dragon = "";
let precio = 0;
let agregarItems = false;
let cantidad = 0;

do {
    dragon = prompt(`Contamos con los siguientes dragones:
    1-Áragon
    2-Cynder
    3-Lilith
    4-Plutonius

    ¿Qué dragon desea adquirir? `).toUpperCase();
    cantidad = prompt(`¿Cuántos dragones llevará? `);

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

        case "LILITH" :
        precio = 300;
        break;

        default :
        alert('No contamos con el dragón mencionado. Por favor, escriba otro nombre')
        precio = 0;
        cantidad = 0;

    }


agregarItems = confirm("Desea agregar más productos al carrito?");

originalCarrito.push({dragon,cantidad,precio});

}
while(agregarItems);


const carrito = originalCarrito.map( (elemento) => { 
    return { 
        nombre: elemento.dragon,
        precio: (elemento.precio*1.21).toFixed(),
        cantidad: elemento.cantidad
    }
})

console.log (carrito);


alert('Impuesto Aldeano: 1,21%');

let descuento = false;
descuento = confirm('Tiene un cupón de descuento? ...("PRI")... *guiño* *guiño*');

    if (descuento) {

        let valido = false;

        do {
            let cupon = "";
            cupon = prompt('ingrese aquí su cupon:').toUpperCase();

            if (cupon == "PRI") {
                carrito.forEach ( (cosa) => {
                    return {
                        nombre: cosa.nombre,
                        precio: (cosa.precio*0.30).toFixed(),
                        cantidad: cosa.cantidad
                    }
                })
                    alert( 'Su cupón es válido. Recibe un 30% de descuento en su compra!');
                } else {
                        alert('Cupón no válido. Vuela a ingresarlo');
                        valido = true;
                    }
        } while (valido);
    }

const nombres = [];
const precios = [];
const cantidades = [];

for (const n of carrito) {
    nombres.push (n.nombre);
    precios.push (n.precio*n.cantidad).toFixed();
    cantidades.push(n.cantidad);
}


console.log(nombres);
console.log(precios);
console.log(cantidades);

let consulta = false;
consulta = confirm(`Usted está comprando: 
Dragon: ${nombres.join(',')}
Cantidades: ${cantidades.join(',')}
Precios: ${precios.join(' gemas, ')}
¿desea modificar su compra?`);

    if(consulta) {
    
        do {
            posicion = nombres.indexOf(String(prompt('indique el nombre del dragón desea eliminar').toUpperCase()));
            if (posicion != -1) {

                nombres.splice(posicion,1);
                precios.splice(posicion,1);
                cantidades.splice(posicion,1);

                alert(`Usted está comprando: 
                Dragon: ${nombres.join(',')}
                Cantidades: ${cantidades.join(',')}
                Precios: ${precios.join(' gemas, ')} `);
                }
                else { 
                    alert('No existe ese elemento.');
            }
        }
        while ((confirm('Desea realizar más cambios a su compra?')))
    }



let finalizar = confirm('Finalizar compra');

if (finalizar) {

    const montoFinal = precios.reduce((acc,p) => acc+p,0);
 
    let revision = confirm('Desea revisar su compra?');

    if (revision) {

         alert(`Usted adquirió: 
                Dragon: ${nombres.join(',')}
                Cantidades: ${cantidades.join(',')}
                Precios: ( ${precios.join(' gemas, ')} ) gemas
                
                Monto final (incluye impuestos y descuentos): ${montoFinal}`);
            
         }
        
     else {
        Alert (`Monto total: ${montoFinal}  gemas.
        ¡Gracias por su compra!`);
    }
} 
else {
    alert('Compra cancelada');
}

Alert (`Monto total: ${montoFinal}  gemas.
        ¡Gracias por su compra!`);
