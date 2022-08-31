alert ('Bienvenidos al exámen de Matemáticas. Presione el boton "ENTER" para comenzar')

alert ("A continuación deberá indicar qué valores de A o B satisfacen la siguiente ecuación:")

let PUNTOS = Number(0)

for (let i = 1; i<=10; i++){

    alert ('A + B X' + i + '= 10')

    let A = Number(prompt('Ingrese el valor A'));
    let B = Number( prompt('Ingrese el valor B'));
    let resultado = Number(  A + B * i);

    if (resultado === 10) {

        alert ('Respuesta correcta. Acaba de sumar 1 punto');

        PUNTOS++;
    }
    else {
        alert ('Respuesta incorrecta, el resultado de ' + A + '+' + B + ' X ' + i + 'es = ' + resultado)
    }
    
            
     }
     alert ('NOTA FINAL: ' + PUNTOS)
     alert ('Examen finalizado.')

console.log("Examen finalizado")