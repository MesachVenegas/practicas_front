//* Tarea moral de hoy:
//* Ejercicio 1
/*
    Genera una variable que almacene una frase cualquiera
    Extrae el carácter en el indice 15.
    Sí hay un carácter en ese indice muéstralo en consola, de lo contrario muestra un mensaje con el texto: "No hay suficientes letras en el texto"
*/
let phrase = "Hola soy una frase random para este ejercicio mucho gusto";
let chart = phrase[15] ?? "No hay suficientes letras en el texto";
console.log(chart);

//* Ejercicio 2
/*
    Evalúa si la ultima letra de tu frase cualquiera es una vocal (sin importar mayúsculas o minúsculas)
    En caso de que NO sea una vocal, se devolverá false
    En caso de que se trate de una vocal devolverá un texto que diga: "La vocal es x"
*/
let lastChart = phrase[phrase.length -1].toLowerCase();
let isVocal = lastChart === "a" || lastChart === "e" || lastChart === "i" || lastChart === "o" || lastChart === "u";
console.log(isVocal != false && `La vocal es ${lastChart}`);

//* Ejercicio 3
/*
    Imagina que tienes una tienda en linea (de postres).
    Genera una variable donde vas a sumar y guardar el total a pagar de los productos seleccionados por el cliente. (De inicio no hay ningún producto seleccionado, piensa cual es el mejor valor inicial)
    Genera otras variables donde vas a guardar el precio de distintos productos:
        pastel - 150
        galleta - 30
        gelatina - 100
    El cliente selecciono 1 pastel, 1 galleta y 1 gelatina. (Toma en cuenta que cada selección es un proceso individual, es decir, primero selecciona el pastel y se actualiza el total a pagar, despues selecciona la galleta y hay una segunda actualización, y asi con cada producto seleccionado)
    Actualiza la variable que guarda el total  y muéstralo en consola con el mensaje: "El total a pagar es de xxxx pesos"
*/
let bag = 0;
let cake = 150;
let cookie = 30;
let jelly = 100;
bag += cake;
bag += cookie;
bag += jelly;
let outPut = `El total a pagar es de $${bag} pesos. `;
console.log(outPut);