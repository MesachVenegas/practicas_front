const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const multiplicacion = (a, b) => a * b;

const division = (a, b) => a / b;


// Funciones de orden superior
// Funciones que recibirán otras funciones como parametros, devuelven funciones como valores de retorno.

/*
function funcionOrdenSuperior(otraFuncion){

    return algunaOtraFuncion;
}

const funcionOrdenSuperiorAnónima = otraFuncion => {
    // Cuerpo
    return algunaOtraFuncion;
}
*/

// Las funcionmes que se reciben como parametros se llaman "callbacks".
// Las funciones que se retornan como valor de retorno son conocidas como "closures"

/*
function funcionOrdenSuperior(callback){
    callback()
    return valorDeRetorno;
}

funcionOrdenSuperior(funcion(parametros)){
    // cuerpo
    return valorDeRetorno;
}

funcionOrdenSuperior((parametro1, parametro2) =>{
    // Instrucciones
    return valorDeRetorno
})
*/


// calcular es una funcion de orden superior
// el parámetro 'operacion' es el callback

// const calcular = function(operacion, num1, num2){
//     let resultado = operacion(num1, num1)

//     return resultado
// }

// console.log(calcular(suma, 2, 2));
// // opción mas común
// console.log(calcular((a,b) => a + b, 2, 2));



const pets = [
    {specie: "Gato", name: "Juno", age: 5},
    {specie: "Gato", name: "Canela", age: 1},
    {specie: "Perro", name: "Jupiter", age: 6},
    {specie: "Perro", name: "Ramon", age: 8},
    {specie: "Ajolote", name: "Nemo", age: 1},
    {specie: "Hamster", name: "Benito", age: 2},
    {specie: "Gato", name: "Aurora", age: 3}
]

const getAllNames = (petsArray) => {
    const namesArray= [];

    for(let pet of petsArray){
        namesArray.push(pet.name)
    }

    return namesArray;
}

// console.log(getAllNames(pets));


// arreglo.map
// Recorrer un arreglo. Con cada elemento del arreglo ejecuta el callback que recibe como parametro, lo que retorne cada ejecución del callback, lo va a añadir a un arreglo, el valor de retorno map sera el arreglo con todos los valores de retorno de cada ejecución del callback.


/*
    arreglo.map( (elementoActual, indice, arreglo ) => {
        Instrucciones elementoActual
        return valorDeRetorno;
    })
*/

// let retornoMap = pets.map( (pet, indice, arreglo) =>{
//     console.log(`Elemento Actual: ${pet}`);
//     console.log(`Indice: ${indice}`);
//     console.log(`Arreglo que esta iterando: ${arreglo}`);
//     return pet.name
// } )

let retornoMap = pets.map( (pet, indice, arreglo) => pet.name)

console.log(retornoMap);