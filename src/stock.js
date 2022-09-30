
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
  

const dragon1 = new Dragon(0, 'Dragones Celestiales', A, 'Áragon', 180, 'public/img/ciruelo 1.jpg');
const dragon2 = new Dragon(1, 'Dragones de magia oscura', B, 'Cynder', 1000, 'public/img/ciruelo 6.jpg');
const dragon3 = new Dragon(2, 'Dragones Exóticos', C, 'Plutonius', 200, 'public/img/dragon mariposa.jpg');
const dragon4 = new Dragon(3,'Dragones Guardianes', D, 'Lilith', 300, 'public/img/ciruelo 2.jpg' );

const dragones = [] ;  

dragones.push (dragon1, dragon2, dragon3, dragon4);

export {dragones};
