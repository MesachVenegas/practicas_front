// let phrase = "Hola mundo!"

// H o l a   m u n d o  !
// 0 1 2 3 4 5 6 7 8 9 10  <- indices
// 1 2 3 4 5 6 7 8 9 10 11 <- cantidad / longitud

//* PROPIEDADES -> características
//   dato.nombrePropiedad
// string.length --> cantidad de carcateres
//console.log( phrase.length )

//* Relación entre el ultimo indice y la longitud del string
// ultimoIndice = longitud - 1
//console.log( phrase.length - 1 ) // ultimo indice


//* EXTRAER UN CARÁCTER
// cadena[indice]
//console.log( phrase[0] )


//* Extraer el ultimo carácter
//console.log( phrase[ phrase.length - 1 ] )
//console.log( phrase[100] )


//* =============== NÚMEROS ==================
let positiveNumber = 100
let negativeNumber = -50
let entero = 10
let floatNumber = 25.75

//console.log( positiveNumber.length ) //No existe longitud ni indices

//********************** NÚMEROS ESPECIALES **********************
/*
    -> -Infinity
    -> Infinity
    -> NaN  (Not A Number)
    Procesos que no pueden devolver una cifra numérica significativa
*/
//console.log( typeof NaN )


//********************** OPERADORES **********************
/*
    OPERADOR -> Simbolo que indica la operacion que se va a llevar a cabo +, -. *
    OPERANDOS -> Datos que vamos a manipular a traves del operador

    UNARIOS - Solo tiene un operando
    BINARIOS - Necesitan dos operandos
    TERNARIO - Se conforma de 3 operandos
*/

//********************** OPERACIONES ARITMÉTICAS **********************
//console.log( 10 + 5 ) // suma
//console.log( 100 - 1 ) // resta
//console.log( 10 * 2 ) // multiplicacion
//console.log( 10 / 2 ) // division
//console.log( 3 ** 3 ) //Potencia , 3 al cubo, 3 * 3 * 3 , 3 ^ 3, 27
//console.log( 5 ** 2 ) // 5 al cuadrado, 5 * 5

/*
    MODULO %
    12 / 5  ¿Cuantas veces cabe el 5 dentro del 12?
    El 5 cabe 2 veces dentro del doce y nos quedaria un residuo de 2 ya que el 5 cabe 2 veces es decir 2 x 5 = 10 para 12 nos faltarían 2 que seria el residuo al cual llegamos mediante
    el modulo.
    12 % 5 --> 2
*/

//console.log( 12 % 5 ) --> 2
//console.log( 8 % 5 ) --> 3


// ********************** CONVERSIÓN EXPLICITA **********************
/*
    console.log("100" - 1)  Convierte el string "100" a tipo numérico. --> 99
    console.log("cien" - 1)  convierte el string "cien" a tipo numérico --> NaN
        En este caso a un NaN ya que se desconoce el numero que da como resultado mas sin embargo se identifica que es un numero.
    console.log(NaN + 100) Realiza una operacion matemática dando como resultado otro numero Nan ==> NaN
    console.log(NaN + "100") Realiza una conversion explicita convirtiendo el valor numérico a string dando como resultado una cadena de texto ==> NaN100
*/


// ******************* Convertir a tipo Numérico *******************
/*
Number(dato) --> Convierte un dato a tipo numérico.
    console.log(Number("9.99")) ==> 9.99 tipo numérico.
    console.log(Number("Brenda")) ==> NaN tipo numérico.
    console.log( Number(true)) ==> 1 tipo numérico.
    console.log( Number(false)) ==> 0 tipo numérico.

parseInt(dato) --> Convierte un dato a un tipo numérico entero.
    console.log( parseInt("100.5")) ==> 100 Numero entero.
    console.log( parseInt(10.75)) ==> 10 Numero entero.

parseFloat(dato) --> Convierte un dato a un numero de coma flotante.
    console.log(parseFloat("100.25")) ==> 100.25 String a Number
    console.log(parseFloat("100.99 pesos")) ==> 100.99 String a Number

*/

// ********************** OPERADORES DE COMPARACION **********************
// Reciben dos datos, y regresan un dato booleano(true/false) dependiendo del valor de verdad de la comparacion

// menor que <
// mayor que >
// igual a ==
// diferente que !==
/*
    console.log(5 < 100) ==> true
    console.log(30 < 10) ==> false
    console.log(5 > 100) ==> false
    console.log(30 > 10) ==> true
*/

//********************** Comparaciones de strings **********************
/*
Un criterio de diccionario
    Comparacion por ubicaciones en el abecedario.
    console.log( "a" < "b" )
    console.log( "b" < "a" )
*/

//Las mayúsculas se consideran mas pequeñas
//console.log( "a" < "A" )

//IGUAL QUE
//COMPARACION SIMPLE ==
/*console.log( "100" == 100 )
console.log( true == 1 )
*/

//COMPARACIÓN ESTRICTA ===
/*console.log( "100" === 100 )
console.log( true === 1 )
*/
//DIFERENTE QUE
// Solo devuelve false cuando los datos son iguales entre si
//DIFERENTE SIMPLE
// console.log( 100 != "100" ) // 100 es igual a "100"  -> coercion implícita

// DIFERENCIA ESTRICTA
// console.log( 100 !== "100") // 100 no es igual a "100" -> NO hay coercion
// console.log( "gato" === "GATO" ) // No son iguales porque las string son case sensitive



//Almacenar en una variable una frase cualquiera, y van a determinar si su primera letra es la letra "A"/ "a". Si es así en una segunda variable, vamos a almacenar un booleano true, de no ser así, guardaremos un false

// let phrase = "Mañana sera"

//Conocer la primera letra
//Hacer indiferente mayúsculas y minúsculas
//Comparar con la "A" / "a"
// Resultado de la comparacion se guarda en la segunda variable

// let firstChart = phrase[0]
// //console.log( firstChart )

// let firstChartLowerCase = firstChart.toLowerCase()
// //console.log( firstChartLowerCase )

// let firstLetter = firstChartLowerCase === "a"
// // let firstLetter2 = firstChart === "a" || firstChart === "A"
// console.log( firstLetter )


// console.log( "EsTa Es UnA CADeNA dE tExTo".toLowerCase() )
// console.log( "EsTa Es UnA CADeNA dE tExTo".toUpperCase() )

// const nombre = "BrENdA gONzALEZ"

// let nameLowerCase = nombre.toLowerCase()

// console.log( nombre )
// console.log( nameLowerCase )

// console.log( "a" == "A" )