// Variables son referencias que estamos generando en la memoria de la computadora.

// var => Es una forma obsoleta de declarar variables
// var userName = "Mesach";

// let => Nos permite la redeclaracion de las variables evitando posibles errores.
let userAge;
let userName;
userName = 29*2;
userAge = 60;
userAge = true;
// console.log(userName);
// console.log(userAge);

// const => Nos permite declarar variables a las cuales no se podra modificar mas adelante.NO PERMITE REASIGNACIONES.
const gravity = 9.8;
const pi = 3.141598;
// console.log(gravity, pi);


// Tipos de datos
// Strings
let phrase = 'Hola Mundo!';
let myName = "Mesach Venegas";

let greetings = `${phrase} mi nombre es ${myName} mucho gusto ${100 + 100}`;
console.log(greetings);

let numberString = "100";
let booleanString = "true";

console.log(numberString + 200)
;