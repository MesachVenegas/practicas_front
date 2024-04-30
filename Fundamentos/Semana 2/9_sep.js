//*  Condicionales

//* Una condición que evalué si un numero es par o impar en caso de que sea par mostrar en consola que es par o impar


function oddOrEven(number){
    if(number % 2 === 0){
        return "Es un numero par";
    }else{
        return "Es un numero impar";
    }
}

// console.log(oddOrEven(9));
// console.log(oddOrEven(18));
// console.log(oddOrEven(26));


// Generar una funcion que reciba 2 números y devuelva un arreglo, con todos los números pares que hay entre los 2 números sin contar a los propios números.

function arrayOdd(start, end){
    let numbers = [];
    for (let i = start + 1; i < end; i++){
        if(i % 2 === 0){
            numbers.push(i)
        }
    }
    return numbers;
}

// console.log(arrayOdd(2,16));


//* Crear una funcion que reciba un arreglo de usuarios y devuelva un arreglo que contenga solo a los usuarios  mayores de 25.
