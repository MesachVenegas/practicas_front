//Permanncia de informacion en el navegador
//Almacenar informacion 

//window -> Representa al navegador
//localStorage 
//Los datos no tienen fecha de expiracion

//sessionStorage
//La informacion solo se guarda mientra la sesion siga activa. En cuanto la venta se ciera, la informacion se pierde

//stripe, conekta


// JSON -> JavaScript Object Notation -> Notacion de objetos de Javascript
//Formato de TEXTO

//Algo que NO es JSON --> JSON
//JSON.stringify( dato ) --> dato en formato JSON
let JSONString = JSON.stringify("Hola mundo!")
//console.log( JSONString )

let JSONNumber = JSON.stringify(100)
//console.log(JSONNumber)

let JSONArray = JSON.stringify([1, 2, 3])
//console.log(JSONArray)

let JSONObject = JSON.stringify({
    name: "Brenda",
    age: 27
})
//console.log(JSONObject)

//JSON.parse( JSON ) --> datos en su formato original
/*
console.log( JSON.parse( JSONString ) )
console.log( JSON.parse( JSONNumber ) )
console.log( JSON.parse( JSONArray ) )
console.log( JSON.parse( JSONObject ) )

*/

//METODOS PARA EL STORAGE


const user = {
    name: "Brenda",
    age: 27
}
/*
*CREAR
window.localStorage.setItem( "nombrePropiedad", valorAGuardarJSON )

localStorage.setItem( "user", JSON.stringify( user ) )
localStorage.setItem( "bandaFavorita", JSON.stringify( "Iron Maiden" ) )

localStorage.setItem( "cart", JSON.stringify( ["galletas", "chocolate", "helado"] ) )
Generar un objeto con su información, nombre, edad y correo, y alamacenarlo


*CONSULTAR
window.localStorage.getItem( "datoAConsultar" )
console.log( JSON.parse( localStorage.getItem( "bandaFavorita" ) ) )
Mostrar en la consola una cadena de texto que diga: "Hola, soy -suNombre- y tengo -suEdad- años"
let dataUser = JSON.parse( localStorage.getItem( "user" ) )
console.log( `Hola, soy ${dataUser.name} y tengo ${dataUser.age} años` )


*ACTUALIZAR
window.localStorage.setItem( "nombreDeLaPropiedadAModificar", nuevoValorAGuardar )

function addProduct(product) {
    let cartActual = JSON.parse( localStorage.getItem( "cart" ) )
    cartActual.push(product)

    localStorage.setItem( "cart", JSON.stringify(cartActual) )
}

addProduct( "pastel" )
addProduct("pan dulce")
addProduct( "pizza" )


localStorage.setItem( "bandaFavorita", JSON.stringify( "Nightwish" ) )

*ELIMINAR
window.localStorage.removeItem( "nombrePropiedadAEliminar" )
localStorage.removeItem( "bandaFavorita" )

window.localStorage.clear()
console.log( localStorage.getItem( "comidaFav" ) )

*/

/*
localStorage.setItem( "cart", JSON.stringify( ["galletas", "chocolate", "helado"] ) )

function addProduct(product) {
    let cartActual = JSON.parse( localStorage.getItem( "cart" ) )
    cartActual.push(product)

    localStorage.setItem( "cart", JSON.stringify(cartActual) )
}

addProduct( "pastel" )
addProduct("pan dulce")
addProduct( "pizza" )
*/


function getStorageInfo() {
    let cart = localStorage.getItem("cart")

    if (cart) {
        //Es distinto de null
        cart = JSON.parse(cart)
        if (cart.length !== 0) {
            //listar los elementos en DOM
            showProducts(cart)
        }
    } else {
        // Fue null
        localStorage.setItem("cart", JSON.stringify([]))
    }
}

function addProduct(product) {
    let cartActual = JSON.parse(localStorage.getItem("cart"))
    cartActual.push(product)
    localStorage.setItem("cart", JSON.stringify(cartActual))


    showProducts(cartActual)
}

function showProducts(cart) {
    const list = document.getElementById("product-list")
    let fragment = ``
    cart.forEach(item => {
        fragment += `<li> ${ item } </li>`
    })
    list.innerHTML = `
        <ul>
            ${ fragment }
        </ul>
    `
}

document.addEventListener("DOMContentLoaded", () => {
    getStorageInfo()
})