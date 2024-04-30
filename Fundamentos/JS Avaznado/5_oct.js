const numbersArray = [10.5, 5.33, 3.4, 50.2, 33.888, 20, 101.83, 666.666]

// Generar un nuevo arreglo con los números redondeados
const roundedNums = numbersArray.map( number => Math.round(number))
// console.log(roundedNums);

// Generar un arreglo con el cuadrado de todos los números ya redondeados.
const cubeNumbers = roundedNums.map( number => number * number);
// console.log(cubeNumbers);



//  Ejercicio 2
const pets = [
    {specie: "Gato", name: "Juno", age: 5},
    {specie: "Gato", name: "Canela", age: 1},
    {specie: "Perro", name: "Jupiter", age: 6},
    {specie: "Perro", name: "Ramon", age: 8},
    {specie: "Ajolote", name: "Nemo", age: 1},
    {specie: "Hamster", name: "Benito", age: 2},
    {specie: "Gato", name: "Aurora", age: 3}
]

pets.map( pet => pet.hospital = "AnimalHealth")
// console.log(pets);

//  foreach no tiene valor de retorno(incluso si se le indica que deberia retornar algo), esta pensado para repetir una instrucción en cada uno delos elementos de un arreglo
/*
arreglo.forEach(element, indiceActual, arreglo => {
    Accion que va llevar ca uno de los elementos.
});
*/

pets.forEach(pet => pet.hospital = "AnimalHealth")
// console.log(pets);


// Método Filter() evaluar cada elemento con una funcion de filtrado, los elementos que cumplan con la condición de filtrado serán añadidos a un arreglo que sera retornado como valor de retorno, del método filter

/*
    arreglo.filter( (elementoActual, indice, arreglo) => condición)
*/

const numbersOver15 =  numbersArray.filter( number => number > 15);
// console.log(numbersOver15);

//Generar una funcion que reciba como parametro un numero entero. Este numero se utilizara para filtrar a las mascotas. Aquellas que tengan una edad igual o mayor al parametro recibido se devolveran en un arreglo. En caso de que ninguna mascota entre en ese filtro, devolver una cadena que diga: "No se encontraron coincidencias"

const petsOverAge = (pets, age) => {
    let result = pets.filter( pet => pet.age >= age)

    if(result.length === 0){
        return "No se encontraron coincidencias"
    }else{
        return result;
    }
}

// console.log(petsOverAge(pets, 2));


//  Find solo devuelve el primer elemento que cumpla la condición indicada.

/*
    arreglo.find( elementoActual, indice, arreglo)
*/

// console.log( numbersArray.find( number => number > 15 ) );


// Una funcion que devuelva una mascota en especifico.

const searchPet = (petName, petsArray) => {
    let result = petsArray.find( pet => pet.name  == petName)
    return result;
}

console.log(searchPet("Ramon", pets));