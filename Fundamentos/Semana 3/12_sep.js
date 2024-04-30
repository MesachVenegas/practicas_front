// for of obtiene directamente el elemento del iterable
const usuarios = [{
        nombre: "Susana",
        animalFavorito: "Gato"
    },
    {
        nombre: "Pedro",
        animalFavorito: "Gato"
    },
    {
        nombre: "Carlos",
        animalFavorito: "Perro"
    },
    {
        nombre: "Cristian",
        animalFavorito: "Hamster"
    },
    {
        nombre: "Ana",
        animalFavorito: "Perro"
    },
    {
        nombre: "Karina",
        animalFavorito: null
    },
    {
        nombre: "Berenice",
        animalFavorito: "Gato"
    },
    {
        nombre: "Salvador",
        animalFavorito: "Conejo"
    },
    {
        nombre: "Omar",
        animalFavorito: "Ajolote"
    },
    {
        nombre: "Carlos",
        animalFavorito: null
    },
    {
        nombre: "Lupita",
        animalFavorito: null
    }
]

// for of funciona cuando se recorre un iterable, es decir arreglos o cadenas de texto.
for( let user of usuarios){
    // Bloque de codigo por cada elemento del arreglo.
    // console.log(user);
}

const phrase = "Hola que tal";

// Extrae cada carácter del texto.
for(let letter of phrase){
    // console.log(letter);
}

/*
    Crear una funcion que reciba un arreglo de usuarios y el nombre de un animal como parametro. Tiene que retornar cuantos de esos usuarios tienen al animal señalado como animal favorito.
*/
function findAnimal(users, animal){
    let contador = 0;
    for(let user of users){
        if(user.animalFavorito === animal){
            contador += 1;
        }
    }
    return contador;
}

// console.log(findAnimal(usuarios, "Gato"));


// For in extrae cada una de las propiedades de un objeto.
const banda = {
    nombre: "Nightwish",
    formacion: 1996,
    pais: "Finlandia",
    activo: true,
    genero: "Metal Sinfónico",
    integrantes: ["Toumas Holopainen", "Emppu Vuorinen", "Troy Donockley", "Kai Hatho", "Floor Jansen"],
    discografia: [{
            nombre: "Angels Fall First",
            lanzamiento: 1997
        },
        {
            nombre: "Oceanborn",
            lanzamiento: 1998
        },
        {
            nombre: "Wishmaster",
            lanzamiento: 2000
        },
        {
            nombre: "Century Child",
            lanzamiento: 2002
        },
        {
            nombre: "Once",
            lanzamiento: 2004
        },
        {
            nombre: "Dark Passion Play",
            lanzamiento: 2007
        },
        {
            nombre: "Imaginaerum",
            lanzamiento: 2011
        },
        {
            nombre: "Endless Forms Most Beautiful",
            lanzamiento: 2015
        },
        {
            nombre: "Human :||: Nature",
            lanzamiento: 2020
        }
    ],
    vocalistaActual: "Tarja Turunen"
}

// el nombre de las propiedades obtenidas las devuelve en forma de String.
for(let property in banda){
    console.log(property, banda[property]);
}


// let contadorGlobos = {}

//console.log( contadorGlobos.propiedadQueNoExiste ) //undefined

// for (let globo of globos) {
//     if (contadorGlobos[globo.color]) {
//contadorGlobos[ globo.color ]  -> NO es undefined, es 1, 5, 15... 
//Incrementar la cantidad de globos de ese color especifico

//         contadorGlobos[globo.color] += 1

//     } else {
//contadorGlobos[ globo.color ] -> undefined
//Todavía no existe en contadorGlobos una propiedad con el nombre del color que acaba de salir
//Necesitamos crear la propiedad
//valor inicial 1

//         contadorGlobos[globo.color] = 1
//     }
// }

// console.log(contadorGlobos)