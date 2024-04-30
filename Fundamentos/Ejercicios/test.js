//* map
/**
    Tu labor es hacer una mezcla de los datos de ambos arreglos y devolver uno solo que contenga toda la información (sin datos duplicados).
**/

const users = [{
        name: 'Geogr',
        email: 'georg@academlo.com'
    },
    {
        name: 'Andrea',
        email: 'andrea@gmail.com'
    }
]

const attendace = [{
        email: 'georg@academlo.com',
        attendance: true
    },
    {
        email: 'andrea@gmail.com',
        attendance: false
    }
]
/**
    Output expect:
        [
            { name: 'Geogr', email: 'georg@academlo.com', attendance: true },
            { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
        ]
**/
function dataMerge(users, attendace) {
    let data = []
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < attendace.length; j++) {
            if (users[i].email === attendace[j].email) {
                data.push({
                    name: users[i].name,
                    email: users[i].email,
                    attendace: attendace[j].attendance
                });
            }
        }
    }
    return data;
}

// console.log(dataMerge(users, attendace));

/*
    Tu labor es hacer ordenar todos los elementos de menor a mayor utilizando como referencia la propiedad 'score'.
 */

const students = [{
        name: 'Geogr',
        email: 'georg@academlo.com',
        score: 100
    },
    {
        name: 'Andrea',
        email: 'andrea@gmail.com',
        score: 70
    },
    {
        name: 'Andrés',
        email: 'andres@gmail.com',
        score: 34
    }
]

function orderStudentsByScore(students) {
    students.sort(function (a, b) {
        return a.score - b.score
    })
    return students
}

// console.log(orderStudentsByScore(students));

//  El método sort nos permite ordenar objetos em base a su valor unicode si no se le indica ninguna funcion. o bien en la funcion se puede especificar la manera en la que deberán ser ordenados los elementos; en el caso de los objetos estos pueden ser ordenados por una de sus propiedades.



/*
    Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función.
    En el ejemplo anterior retornaríamos 3, ya que 3 estudiantes pertenecen al país con el id 2.
        -Recuerda utilizar return para devolver tu solución.
        -El primer arreglo que recibe la función puede tener n cantidad de estudiantes.
        -El segundo arreglo que recibe la función puede tener n cantidad de países. *El tercer parámetro que recibe la función puede ser el nombre de cualquier país.
*/
const students_country = [{
        name: 'Geogr',
        email: 'georg@academlo.com',
        country_id: 1
    },
    {
        name: 'Andrea',
        email: 'andrea@gmail.com',
        country_id: 2
    },
    {
        name: 'Daniela',
        email: 'daniela@gmail.com',
        country_id: 2
    },
    {
        name: 'Mónica',
        email: 'monica@gmail.com',
        country_id: 2
    }
]
const countries = [{
        id: 1,
        name: 'Mexico',
    },
    {
        id: 2,
        name: 'Colombia'
    }
]

function countStudents(students, countries, contryName) {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < countries.length; j++) {
            if (contryName === countries[j].name && students[i].country_id === countries[j].id) {
                count += 1;
            }
        }
    }
    return count
}


// console.log(countStudents(students_country, countries, "Mexico"));

/*
    Tu labor es encontrar y retornar la edad que se repite más veces.
    En el ejemplo anterior retornaríamos 23, ya que 23 es la edad que se repite más veces.
        -Recuerda utilizar return para devolver tu solución.
        -El arreglo que recibe la función puede tener n cantidad de estudiantes.
*/
const students_age = [
    {name: 'Daniela',age: 25},
    {name: 'Andrea',age: 23},
    {name: 'Jose',age: 27},
    {name: 'Jose',age: 27},
    {name: 'Jose',age: 27},
    {name: 'Geogr',age: 23},

];

function findMostCommonAge(students) {
    let ages = {};
    let age_max= null;
    let rep = 0;
    for(let i= 0; i < students.length; i++){
        let common = Object.keys(ages);
        if(common.includes(String(students[i].age))){
            ages[students[i].age] += 1;
        }else{
            ages[students[i].age] = 1;
        }
    }
    for(let age in ages){
        if(ages[age] > rep){
            age_max = age;
            rep = ages[age];
        }
    }
    return  parseInt(age_max);
    // let values = Object.values(ages)
    // let result = Math.max.apply(null,values)
}

console.log(findMostCommonAge(students_age));


/*
    Tu labor es encontrar y devolver al usuario con el nombre recibido.Ejemplo:
    En el caso de haber recibido el arreglo mencionado anteriormente y el nombre 'Gustavo' deberías retornar:
*/


const users_name = [
    {name: 'Erik', gender: 'male', age: 22},
    {name: 'Daniela', gender: 'female', age: 22},
    {name: 'Gustavo', gender: 'male', age: 49},
    {name: 'María', gender: 'female', age: 35},
];

function findUser(users, name){
    let user = null;
    for(let i = 0; i < users.length; i++){
        if(users[i].name == name){
            user = users[i]
        }
    }
    return user;
}

// console.log(findUser(users_name, 'María'));


/*
    Tu labor es obtener solo a los usuarios que hayan enviado su aplicación, para esto puedes tomar como referencia la propiedad application de cada usuario.
*/

let register = [
    {
        name: 'Erik',
        email: 'erik@academlo.com',
        channel: 'youtube',
        application: null
    },
    {
        name: 'Georg',
        email: 'georg@gmail.com',
        channel: 'facebook',
        application: {
            country: 'Mexico',
            state: 'Nuevo León'
        }
    },
    {
        name: 'Daniela',
        email: 'daniela@gmail.com',
        channel: 'youtube',
        application: {
            country: 'Colombia',
            state: 'Bogotá'
        }
    }
];

function getApplications(users){
    let send = [];
    for(let i= 0; i < users.length; i++){
        if(users[i].application != null){
            send.push(users[i])
        }
    }
    return send;
}

// console.log(getApplications(register));

/*
La función sumEvens() recibe como parámetros dos números:
    Tu labor es sumar todos los números pares que se encuentren en el rango de los números recibidos, sin incluir a los dos números recibidos.
Ejemplo:
    Si tu función recibe 20 y 30 deberías retornar 100, ya que los números pares entre 20 y 30 son 22, 24, 26, 28 y la suma de todos estos números es 100.
    - Recuerda utilizar return para devolver tu solución.
    - El segundo número recibido siempre será mayor al primero.
*/

function sumEvens(start, end){
    let sum = 0;
    for( let i = start + 1; i < end; i++){
        if(i %2 === 0){
            sum += i;
        }
    }
    return sum
}

// console.log(sumEvens(20, 30))


/*
La función getMultiples() recibe como parámetros dos números:
    Tu labor es encontrar todos los múltiplos del primer número(sin incluir este número) recibido siempre y cuando sean menores al segundo número recibido.
Ejemplo:
    Si la función recibe 20 y 100 deberías retornar un arreglo como el siguiente[40, 60, 80], ya que esos son todos los múltiplos del 20 menores a 100.
    - Recuerda utilizar return para devolver tu solución.
    - Los números que recibe la función podrán ser dos números cualesquiera.
*/

function getMultiples(start, end){
    let multiples = [];
    for(let i = start +1; i < end; i++){
        if(i %start === 0){
            multiples.push(i)
        }
    }
    return multiples;
}

// console.log(getMultiples(20, 100));

/*
La función countLetter() recibe como parámetros dos strings:
    El primer string es una frase cualquiera.

El segundo string es una letra cualquiera.
Tu labor es encontrar cuántas veces se repite la letra en el string.

Ejemplo:
    Si tu función recibe como frase "Hola, me llamo Erik" y como letra "a" debes retornar 2, ya que la letra "a" se encuentra 2 veces en la frase.

    - Recuerda utilizar return para devolver tu solución.
    - Tu solución debe de funcionar para cualquier frase y cualquier letra.
*/

let phrase = "Hola, me llamo Erik";
let letter = 'a';

function countLetter(phrase, letter){
    let counter = 0;
    phrase.split(' ');
    for(let i = 0; i < phrase.length; i++){
        if(phrase[i] === letter){
            counter += 1;
        }
    }
    return counter;
}
4
// console.log(countLetter(phrase, letter))


/*
La función countApplicationsBychannel() recibe como parámetro un arreglo de usuarios
Tu labor es contar cuántas aplicaciones hay por cada canal, para esto debes apoyarte en la propiedad channel.
Algo muy importante es que solo tomaremos en cuenta a los usuarios que hayan enviado su aplicación, si no tienen aplicación no es de nuestro interés saber mediante que canal nos conocieron.

*/
const students_social = [
    {
        name: 'Andrea',
        email: 'andrea@gmail.com',
        channel: 'youtube',
        application: null
    },
    {
        name: 'Daniela',
        email: 'daniela@gmail.com',
        channel: 'youtube',
        application: {
            country: 'Colombia',
            state: 'Bogotá'
        }
    },
    {
        name: 'Alondra',
        email: 'alondra@gmail.com',
        channel: 'twitter',
        application: {
            country: 'Colombia',
            state: 'Bogotá'
        }
    },
    {
        name: 'Luis',
        email: 'luisa@gmail.com',
        channel: 'twitter',
        application: {
            country: 'México',
            state: 'Nuevo León'
        }
    }
];

function countApplicationsBychannel(students){
    const redes = {}
    for(let i = 0; i < students.length; i++){
        if(students[i].application != null){
            let keys = Object.keys(redes);
            if(keys.includes(students[i].channel)){
                redes[students[i].channel] += 1;
            }else{
                redes[students[i].channel] = 1;
            }
        }
    }
    return redes;
}

// console.log(countApplicationsBychannel(students_social));


/*
    Encuentra la cantidad de números individuales que componen a un número
    La función countNumbers() recibe como parámetro un número

    Tu labor es encontrar y retornar el total de números individuales que lo componen.
    Ejemplo:
        Si la función recibe el número 128 debemos retornar un 3 porque el número 128 está compuesto por 3 números.
    Ejemplo 2:
        Si la función recibe el número 84 debemos retornar un 2 porque el número 84 está compuesto por 2 números.
    - Recuerda utilizar return para devolver tu solución.
    - El número que recibe la función puede ser cualquiera.
*/

function countNumbers(number){
    return String(number).length
}

