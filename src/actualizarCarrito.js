const actualizarTotalesCarrito = () => {
    const totalCantidad = carrito.reduce ((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce ((acc,item) => acc + (item.precio*item.cantidad), 0);
}

export {actualizarTotalesCarrito};