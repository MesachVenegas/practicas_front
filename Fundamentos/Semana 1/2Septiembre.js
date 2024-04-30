//* Funciones.
/*
    Funciones declaradas.
    Las funciones son bloques de código
*/
function myFunction(product, product2){
    // Instrucciones de la funcion.
    // todo lo que no cambia va dentro de la funcion
    console.log(product);
    console.log(product2);
}

myFunction(22, "cookie")
myFunction("ciento cincuenta mil", "uno")

function sumar(num1 , num2){
    return num1 + num2;
}

let suma =  sumar(12, 13)
console.log(suma);
console.log(sumar(100, 2500));


let totalAPagar = 0;
let cake = 150;
let cookie = 30;
let jelly = 100;

//  Return solo se usa cuando se esta creando algo nuevo, no asi para la modificación de valores ya existentes.
function addProduct(productPrice){
    totalAPagar += productPrice;
    console.log(`El total es de $${totalAPagar} pesos`);
}


addProduct(cake);
addProduct(cake);
addProduct(cookie);