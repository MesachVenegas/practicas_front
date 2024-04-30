//* Crea un arreglo con los números del 1 al 400.
let arrayNumbers = [];

for(let i=1; i<= 400; i++){
    arrayNumbers.push(i)
}

console.log(arrayNumbers);

//* Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.
function range(a, b){
    let numbers = [];
    for(let i = a; i <= b; i++){
        numbers.push(i);
    }
    return numbers;
}

console.log(range(5,10));

//* Crea una función que lea un array de N cantidad de números y retorne la suma de TODOS esos números.
function sumArray(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }

    return suma;
}

console.log(sumArray([1,4,5,2,12,2]));

//* Crea una función que reciba un numero y muestre en la terminal la tabla de multiplicar correspondiente a dicho numero. En este ejercicio no es necesario retornar ningún valor, solo mostrar en terminal. (La tabla no tiene que ser de tipo number)
/*
Si recibes el 7 en la terminal deberá visualizarse:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21

7 x 10 = 70
*/

function multiplication(number){
    for( let i= 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiplication(7)

//* EXTRA: Crea una función que reciba una frase cualquiera y que retorne la frase con las palabras en orden invertido. Es decir, si recibes “Hoy es un buen día para programar” el valor de retorno esperado será: “programar para día buen un es Hoy”
//*Hint: Es posible crear un ciclo en el que la variable auxiliar decremento en lugar de incrementarse. Solo ten cuidado con el valor inicial y la condición.

function randomWord(phrase){
    let list_phrase = phrase.split(" ")
    let reverse_phrase = [];
    for(let i = phrase.length - 1; i >= 0; i--){reverse_phrase.push(list_phrase[i])}
    return reverse_phrase.join(" ").trim()

//* Mi solución.
    // let phrase_array = phrase.split(" ");
    // let reversed = phrase_array.reverse()
    // return reversed.join(" ");
}

console.log(randomWord("Hoy es un buen dia para programar"));