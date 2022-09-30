import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { dragones } from "./stock.js";

let carrito = [];

const validarProductoCarrito = (productoId) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId);


    if (productoRepetido) {
        productoRepetido.cantidad++;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
}

const agregarAlCarrito = (productoId) => {
    const contenedor = document.getElementById('carrito-contenedor');
    const prod = dragones.find(prod => prod.id === productoId)
    carrito.push(prod);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${prod.nombre}</p>
                    <p>Precio: ${prod.precio}</p>
                    <p id='eliminar${prod.id}' class='btn waves-effect waves-light boton-eliminar' value=${prod.precio}`
                    ;

    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
}; 

export { validarProductoCarrito };