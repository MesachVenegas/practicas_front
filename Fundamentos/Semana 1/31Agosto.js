// * Operadores de asignación.

// Operadores que nos permiten asignar valores a las variables.

// (=) : es igual a
let userName = "Mesach";
userName = "Mesach Venegas";

let counter = 0;
// (++) : Incremento. Es un operador unario.
//console.log(++counter); // en este caso primero se hace la suma y despues se ejecuta la sentencia.
// console.log(counter++); // counter es igual a 0 y al finalizar la ejecución se le suma una unidad.
// console.log(counter); // al ejecutar esta sentencia el valor ya ha sido modificado por la anterior.
// console.log(userName++); // comvierte el valor de la variable en un valor numérico.

/* Declarar una variable sin valor inicial
    incrementa la variable.
    Cual es el nuevo valor?
        let variable; tiene el valor de Undefined
        console.log(variable++); al tratar de hacer una operacion matemática lo convierte en un valor numérico Nan
        console.log(variable);
*/

// (--) : Decremento.
// console.log(counter--);
// console.log(counter);

//* Suma asignación (+=)
/*
    estoy cambian el valor de mi variable pero usando el valor anterior de la misma y la suma es acumulativa
    variable += valor a incrementar.
    variable = variable + valor a incrementar.
    */
let addAssignation = 0;
addAssignation += 100; // es igual a 0 + 100.
// console.log(addAssignation);
addAssignation += 50; // es igual a 100 + 50.
// console.log(addAssignation);

// console.log(userName += 100);// realiza una concatenacion. las sumas de asignaciones no tienen prioridad aritmética,
// console.log(userName += " Venegas");

//* Resta asignación (-=)
let lessAssignation = -100;
lessAssignation -= 50;
// console.log(lessAssignation);

//* Multiplicacion asignación (*=)
let mulAssignation = 10;
mulAssignation *= 5;
// console.log(mulAssignation);

//* Division de Asignación(/=)
let divAssignation = 10;
// console.log(divAssignation/ 2)
// console.log(100/ 0); // ==> Infinity

//* Potencia asignación (**=)
let potAssignation = 10;
// console.log( potAssignation **= 2);
// console.log( potAssignation **= 0); //? ==> 1


//* Booleanos.
//  lo que se esta estableciendo es verdadero o false es decir se cumple p mp se cumple.
let boolTrue = true;
let boolFalse = false;
// Teorema de Triconomia
let age = 27;
let isAdult = age >= 18;
let isVaccination = false;
// console.log(isAdult);// ==> true


//* Operadores Lógicos.
//  Reciben datos booleanos y tienen la capacidad de retornar datos booleanos.
/*
    Negación  ==> ! invierte el valor de verdad del booleano.
        dato      !dato
        true  ==> false
        false ==> true
    And  ==> && relaciona dos datos diferentes entre si, y devolverá un booleano verdadero cuando los 2 se cumplen.
        dato && dato        dato
        true && true   ==>  true
        true && false  ==>  false
        false && false ==>  false
        false && true  ==>  false
    Or  ==> ||
        dato1   dato2      dato1 || dato2
        true    true        true
        true    false       true
        false   true        true
        false   false       false
*/

//* Ejemplos.
let phrase = "Hola mundo.!"
let isA = phrase[0] == "a" || phrase[0] == "A";

console.log(`Podemos entrar a la discoteca? ${isAdult && isVaccination}`);
console.log(`Inicia con una letra A/a? ${isA}`);

//* Comparacion

//* mayor o igual >=
/*
    a >= b ==> a > b || a === b
*/
//* menor o igual <=
/*
    a <= b ==> a < b || a === b
*/

//* Guardar en términos booleanos dentro de una variable si un numero cualquiera es par y mayor a 20
//* guardar en una variable si un numero cualquiera es múltiplo de 3

let number = 24;
let isEvenAndBigger = number % 2 === 0 && number > 20;
let mulOfTree = number % 3 === 0;
console.log(`Es múltiplo de 2 y mayor que 20? ${isEvenAndBigger}`);
console.log(`Es múltiplo de 3? ${mulOfTree}`);