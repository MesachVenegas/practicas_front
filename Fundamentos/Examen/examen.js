/*
    Suma todos los números de los dos arreglos
    La Función sumaTwoArrays() recibe como parámetro dos arreglos de números:
        Tu labor es sumar todos los números de ambos arreglos y retornar esta suma.

    Ejemplo:
        Si la función recibe[20, 100] y[30] deberías retornar 150 ya que esta es la suma de todos los elementos de ambos arreglos.*Recuerda utilizar
    return para devolver tu solución.
*/

let array = [100, 20];
let array2 = [30];

function sumaTwoArrays(array, array2){
    let sum = 0;
    for(let element of array){
        sum += element
    }
    for(let element2 of array2){
        sum += element2
    }
    return sum;
}


console.log(sumaTwoArrays(array, array2));

/*
    Devuelve la ultima letra de una frase

    La Función getLastLetter() recibe como parámetro una frase:
        Tu labor es encontrar y retornar la ultima letra de la frase.
    Ejemplo:
        Si la función recibe "Hola mundo" deberías retornar "o" ya que esta es la ultima letra de la frase.

        - OJO!!!Algunas frases pueden empezar o terminar con espacios, deshazte de ellos primero(Hay un método para eso).
        - Recuerda utilizar return para devolver tu solución.
*/

// let phrase= "Hola mundo ";

function getLastLetter(phrase){
    clean_phrase = phrase.trim()
    for(let i = 0; i < clean_phrase.length; i++){
        if(i === clean_phrase.length -1){
            return clean_phrase[i]
        }
    }
}


// console.log(getLastLetter(phrase))


/*
Formatear Fecha

La Función formatDate() recibe como parámetro date, un string con la fecha con el siguiente formato day\ month\ year:
    Tu labor sera darle un formato mas elegante a esa fecha.

Ejemplo:
    Si la función recibe 28 / 04 / 2022 deberías retornar Abril 28, 2022.
    - Recuerda utilizar return para devolver tu solución.
    - Observa que el mes es el único que cambia, puedes crear un arreglo de meses.
    - Suerte!!!
*/
let date = "28/04/2022";

function formatDate(date){
    let months = {
        "Enero" : "01",
        "Febrero": "02",
        "Marzo": "03",
        "Abril": "04",
        "Mayo": "05",
        "Junio": "06",
        "Julio": "07",
        "Agosto": "08",
        "Septiembre": "09",
        "Octubre": "10",
        "Noviembre":"11",
        "Diciembre": "12"
    }
    let fecha = date.split("/");
    let month = null;
    for(let key in months){
        if(months[key] === fecha[1]){
            month = key;
        }
    }
    return `${month} ${fecha[0]}, ${fecha[2]}`

}

// console.log(formatDate(date));


/*
    Cuenta cuantas veces se repite la palabra en la frase

    La Función countWordInPhrase() recibe como parámetros una frase y una palabra:
        Tu labor es contar cuantas veces se repite esa palabra en la frase y debes retornar la cantidad en número.

    Ejemplo:
        Si la función recibe "El viejo lobo, es el lobo mas solitario" y lobo deberías retornar 2 ya que esta son las veces que se repite la palabra lobo en la frase.
        - HINT: Tal vez los métodos string.split() y string.join() te resulten útiles, ¡investigalos!.
        - Recuerda utilizar return para devolver tu solución.
*/
let phrase = "El viejo lobo, es el lobo mas solitario";
let word = "lobo";

function countWordInPhrase(phrase, word){
    let counter = 0
    let arrayword = phrase.split(" ")
    for (let element of arrayword) {
        if (element === word) {
            counter += 1
        }
    }
    return counter
    // let count = 0;
    // let phrase_array = phrase.split("");
    // let filter_phrase = phrase_array.filter(n => n != ',')
    // let new_phrase = filter_phrase.join(' ')
    // return new_phrase;
}

// console.log(countWordInPhrase(phrase, word))