
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



function calcularPrecio ( producto, precio, cantidad ) {
    
    let subtotal = (precio * cantidad);
    let impuestoAldeano = (subtotal * 0.21);
    let total = (subtotal + impuestoAldeano);
        
    if (confirm(`Usted esta comprando:
    
          ${cantidad} Dragon ${producto} 
    
          subtotal: $${subtotal} gemas
          total: ${total} gemas 
    
          ¿Desea continuar?`)) {

         if (confirm('Presione "continuar" para concretar su compra')) {
            alert(`El dragón ${producto} esta en camino`);
         } else {
            alert('hemos cancelado su compra');
        }
     }
     else {
        alert ('compra cancelada');
     }
}

    