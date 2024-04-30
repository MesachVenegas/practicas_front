// Funciones / Scope

function mulNumber(num1, num2){
    return num1 * num2;
}

// console.log(mulNumber(10,5));


function circleArea(radio){
    let area = Math.PI * Math.pow(radio,2);
    return area.toFixed(4);
}

// console.log(circleArea(5));


const phrase= "       Hola Mundo!";
let phraseWhitoutSpaces =  phrase.trim();
// console.log(phrase);
// console.log(phraseWhitoutSpaces);

//! tarea moral investigar 3 metodos diferentes de cadenas de texto, no pueden ser (includes, indexOF, lastIndexOf, slice, toUpperCase, toLowerCase).


// Estructuras de Datos.
/**
 * Las estructuras de datos son conjuntos de datos primitivos.
 */

//* arrays o arreglos.
/**
 * Los arreglos están delimitados por corchetes
 * no son infinitos
 * Son conjuntos o colecciones de datos
 * los elementos tienen un orden
 * los elementos se separan entre si con la ayuda de comas(,).
 */
let name = "mesach";
                // 0       1          2       3     4   5       6    7     8    9     10
let randomArray = [null, undefined, "hola", 100, -100, 12.56, true. NaN, name,[5,10], {}];
// consultar un elemento de mi arreglo completo.
//? syntaxis arreglo[indice]
console.log(randomArray[2]);
console.log(randomArray[9]);

//! Investigar 3 metodos de los arreglos.
// objetos.
